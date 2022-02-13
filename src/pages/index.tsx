import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { FiBook, FiGithub } from "react-icons/fi";
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import * as S from '../styles/pages/Index';

const Home: NextPage = () => {
  const { theme } = useTheme();
  const { user, signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  }, [user, loading])

  async function handleSingIn() {
    if (!user) {
      await signInWithGoogle();
    }

    router.push("/home");
  }

  return (
    <S.Container>
      <Head>
        <title>Bookshelf</title>
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/x-icon" />
      </Head>

      <S.Navbar>
        <S.Row>
          <FiBook color={theme.colors.text} size={24} />
          <S.NavTitle>Bookshelf</S.NavTitle>
        </S.Row>
        <S.GithubButton href='https://github.com/joaovamattos/bookshelf-web' target="_blank">
          <FiGithub color={theme.colors.text} size={24} />
        </S.GithubButton>
      </S.Navbar>
      <S.Main>

        <S.DescriptionWrapper>
          <S.Title>Sua biblioteca virtual.</S.Title>
          <S.Subtitle>Gerencie seus livros em listas de lendo, quero ler e lidos.</S.Subtitle>
          <S.ButtonsWrapper>
            <S.Button onClick={() => handleSingIn()}>
              <Image src="/icons/google.svg" width="16" height="16" alt='Logo Google' />
              Entrar com Google
            </S.Button>
            <S.OutlinedButton href='https://expo.dev/@joaovamattos/Bookshelf' target="_blank">
              <Image src="/icons/expo.svg" width="16" height="16" alt="Logo Expo" />
              Experimente com Expo
            </S.OutlinedButton>
          </S.ButtonsWrapper>
        </S.DescriptionWrapper>
        <S.ImageWrapper>
          <Image src="/woman-reading.svg" width="500" height="500" />
        </S.ImageWrapper>
      </S.Main>
    </S.Container>
  )
}

export default Home
