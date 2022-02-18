import React, { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

import * as S from '../styles/pages/Home';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import NoBooksYet from '../components/NoBooksYet';
import Book from '../components/Book';
import ReadingBook from '../components/ReadingBook';

import books from "../services/fakeBooks";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading])

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <Head>
        <title>Bookshelf</title>
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/x-icon" />
      </Head>

      <Navbar />

      <S.Wrapper>
        <S.TitleWrapper>
          <S.Row>
            <S.Title>Estou lendo</S.Title>
            <S.Amount>(01)</S.Amount>
          </S.Row>
          <S.SeeAllButton>Ver todos</S.SeeAllButton>
        </S.TitleWrapper>
        {books && <ReadingBook book={books[3]} />}

        <S.TitleWrapper>
          <S.Row>
            <S.Title>Quero ler</S.Title>
            <S.Amount>(06)</S.Amount>
          </S.Row>
          <S.SeeAllButton>Ver todos</S.SeeAllButton>
        </S.TitleWrapper>

        <S.BookList>
          {books && books.map(book => (
            <Book book={book} key={book.id} />
          ))}
        </S.BookList>

        <S.TitleWrapper>
          <S.Row>
            <S.Title>Lidos</S.Title>
            <S.Amount>(0)</S.Amount>
          </S.Row>
          <S.SeeAllButton>Ver todos</S.SeeAllButton>
        </S.TitleWrapper>
        <NoBooksYet />
      </S.Wrapper>

    </S.Container>
  );
}

export default Home;