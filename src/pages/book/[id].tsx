import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { DateTime } from "luxon";

import { useAuth } from '../../hooks/useAuth';

import Navbar from '../../components/Navbar';
import Loading from '../../components/Loading';

import * as S from '../../styles/pages/Book';

import books from "../../services/fakeBooks";
import Select from '../../components/Select';

interface BookList {
  label: String;
  value: String;
}

const Search: NextPage = () => {
  const [bookList, setBookList] = useState<BookList>({ value: "wantToRead", label: "Quero ler" });
  const router = useRouter();
  const { user, loading } = useAuth();



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
        <title>Bookshelf - {books[parseInt(router.query.id)].volumeInfo.title}</title>
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/x-icon" />
      </Head>

      <Navbar />

      <S.Wrapper>
        <S.Row>
          <S.BookCover src={books[parseInt(router.query.id)].volumeInfo.imageLinks.thumbnail ? books[parseInt(router.query.id)].volumeInfo.imageLinks.thumbnail : '/book-cover.png'} alt={books[parseInt(router.query.id)].volumeInfo.title} />

          <S.DescriptionWrapper>
            <S.Title>{books[parseInt(router.query.id)].volumeInfo.title}</S.Title>
            <S.Author>{books[parseInt(router.query.id)].volumeInfo.authors}</S.Author>
            <S.InfoWrapper>
              <S.Label>Páginas:</S.Label>
              <S.Info>{books[parseInt(router.query.id)].volumeInfo.pageCount}</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>Editora:</S.Label>
              <S.Info>{books[parseInt(router.query.id)].volumeInfo.publisher}</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>Data de lançamento:</S.Label>
              <S.Info>{formatDate(books[parseInt(router.query.id)].volumeInfo.publishedDate)}</S.Info>
            </S.InfoWrapper>
          </S.DescriptionWrapper>
        </S.Row>

        <S.Description>{books[parseInt(router.query.id)].volumeInfo.description}</S.Description>

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

export default Search;