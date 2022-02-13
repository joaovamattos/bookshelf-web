import React from "react";
import Head from "next/head";

import { Container, Spinner } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Bookshelf</title>
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/x-icon" />
      </Head>
      <Spinner />
    </Container>
  );
};

export default Loading;