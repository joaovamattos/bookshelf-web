import React, { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

import * as S from '../styles/pages/Profile';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Profile: NextPage = () => {
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

  return (
    <S.Container>
      <Head>
        <title>Bookshelf - {user?.name}</title>
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/x-icon" />
      </Head>

      <S.Cover>
        <Navbar />

        {user && <S.Avatar src={user.avatar} alt={user.name} />}
        <S.Name>{user?.name}</S.Name>
        <S.Email>{user?.email}</S.Email>
      </S.Cover>

      <S.Wrapper>
        <Button onClick={() => handeSingOut()} title="Sair" />
      </S.Wrapper>
    </S.Container>
  );
}

export default Profile;