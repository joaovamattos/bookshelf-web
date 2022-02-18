import React, { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';

import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import NoBooksFound from '../components/NoBooksFound';
import Book from '../components/Book';

import * as S from '../styles/pages/Search';

import books from "../services/fakeBooks";

const Search: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { theme } = useTheme();

  const noBooksFound = true;

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
        <S.Title>Procure livros</S.Title>
        <S.Subtitle>Encontre o livro dos seus sonhos</S.Subtitle>

        <S.InputWrapper>
          <S.Input type="text" placeholder="Digite para começar a procurar (Nome do livro ou ISBN)" autoFocus />
          <S.InputIcon>
            <FiSearch size={24} color={theme.colors.text} />
          </S.InputIcon>
        </S.InputWrapper>

        {!books ? (
          noBooksFound ? (
            <NoBooksFound />
          ) : (
            <S.Image src="/knowledge.svg" alt="Mulher lendo" />
          )) : (
          <S.BookList>
            {books && books.map(book => (
              <Book book={book} key={book.id} />
            ))}
          </S.BookList>
        )}
      </S.Wrapper>
    </S.Container>
  );
}

export default Search;