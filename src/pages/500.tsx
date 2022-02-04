import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import * as S from '../styles/pages/Error';
import CustomError from '../components/CustomError';

const Custom500: NextPage = () => {

  return (
    <S.Container>
      <Head>
        <title>Bookshelf - Erro 500</title>
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/x-icon" />
      </Head>
      <CustomError image="500error" message='Ooops! Tivemos um problema, por favor tente novamente.' />
    </S.Container>
  );
}

export default Custom500;