import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';

import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { api } from '../services/api';

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import NoBooksFound from '../components/NoBooksFound';
import Book from '../components/Book';

import * as S from '../styles/pages/Search';

interface BookProps {
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

const Search: NextPage = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<BookProps[]>([]);
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();
  const { user, loading } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (search === "") {
        setNotFound(false);
        setBooks([]);
        return;
      };

      const loadBooks = async () => {
        const response = await api.get(`/volumes?q=${search}&key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`);

        const data = response.data;
        if (response.data.totalItems === 0) {
          setBooks([]);
          return setNotFound(true);
        }

        setNotFound(false);
        setBooks(data.items);
      }
      loadBooks();
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

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
          <S.Input
            type="text"
            placeholder="Digite para começar a procurar (Nome do livro ou ISBN)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus />
          <S.InputIcon>
            <FiSearch size={24} color={theme.colors.text} />
          </S.InputIcon>
        </S.InputWrapper>

        {notFound ? <NoBooksFound /> : (
          books.length > 0 ? (
            <S.BookList>
              {books && books.map(book => (
                <div onClick={() => router.push(`/book/${book.id}`)} key={book.id}>
                  <Book book={book} />
                </div>
              ))}
            </S.BookList>
          ) : <S.Image src="/knowledge.svg" alt="Mulher lendo" />
        )}

      </S.Wrapper>
    </S.Container >
  );
}

export default Search;
