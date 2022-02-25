import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { DateTime } from "luxon";

import { useAuth } from '../../hooks/useAuth';

import Navbar from '../../components/Navbar';
import Loading from '../../components/Loading';

import * as S from '../../styles/pages/Book';

import Select from '../../components/Select';
import { getAPIClient } from '../../services/axios';

interface BookList {
  label: String;
  value: String;
}

interface BookProps {
  book: {
    id: string;
    volumeInfo: {
      imageLinks: {
        thumbnail: string | undefined;
        smallThumbnail: string | undefined;
      };
      title: string;
      authors: string;
      pageCount: number;
      description: string;
      publisher: string;
      publishedDate: string;
    };
  }
}

function Book({ book }: BookProps) {
  const [bookList, setBookList] = useState<BookList>({ value: "wantToRead", label: "Quero ler" });
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log(book);

  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading]);

  function formatDate(date: string) {
    if (date !== null) {
      const newDate = new Date(date).toISOString();
      const rezoned = DateTime.fromISO(newDate).setZone("America/Manaus");
      return rezoned.toLocaleString({
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <Head>
        <title>Bookshelf - {book.volumeInfo.title}</title>
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/x-icon" />
      </Head>

      <Navbar />

      <S.Wrapper>
        <S.Row>
          <S.BookCover src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '/book-cover.png'} alt={book.volumeInfo.title} />

          <S.DescriptionWrapper>
            <S.Title>{book.volumeInfo.title}</S.Title>
            <S.Author>{book.volumeInfo.authors}</S.Author>
            <S.InfoWrapper>
              <S.Label>Páginas:</S.Label>
              <S.Info>{book.volumeInfo.pageCount}</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>Editora:</S.Label>
              <S.Info>{book.volumeInfo.publisher}</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>Data de lançamento:</S.Label>
              <S.Info>{formatDate(book.volumeInfo.publishedDate)}</S.Info>
            </S.InfoWrapper>
          </S.DescriptionWrapper>
        </S.Row>

        <S.Description>{book.volumeInfo.description}</S.Description>

        <Select setBookList={setBookList} bookList={bookList} />

        <S.Button>
          <S.ButtonText>Adicionar a lista</S.ButtonText>
        </S.Button>

        <S.CancelButton>
          <S.CancelButtonText>Remover da lista</S.CancelButtonText>
        </S.CancelButton>
      </S.Wrapper>
    </S.Container>
  );
}

export default Book;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);

  const response = await apiClient.get(`/volumes?q=${ctx.query.id}`);

  if (!response.data.items) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }

  const book = response.data.items[0];

  return {
    props: {
      book
    },
  };
}