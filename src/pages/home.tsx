import React, { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

import * as S from '../styles/pages/Home';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import NoBooksYet from '../components/NoBooksYet';

const Home: NextPage = () => {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading])

  async function handeSingOut() {
    await signOut();
  }

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
            <S.Amount>(06)</S.Amount>
          </S.Row>
          <S.SeeAllButton>Ver todos</S.SeeAllButton>
        </S.TitleWrapper>
        <NoBooksYet />

        <S.TitleWrapper>
          <S.Row>
            <S.Title>Quero ler</S.Title>
            <S.Amount>(06)</S.Amount>
          </S.Row>
          <S.SeeAllButton>Ver todos</S.SeeAllButton>
        </S.TitleWrapper>
        <NoBooksYet />

        <S.TitleWrapper>
          <S.Row>
            <S.Title>Lidos</S.Title>
            <S.Amount>(06)</S.Amount>
          </S.Row>
          <S.SeeAllButton>Ver todos</S.SeeAllButton>
        </S.TitleWrapper>
        <NoBooksYet />
      </S.Wrapper>

    </S.Container>
  );
}

export default Home;