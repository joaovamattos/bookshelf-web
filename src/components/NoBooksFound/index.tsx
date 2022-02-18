import React from 'react';

import { Container, Image, Title, Message } from './styles';

function NoBooksFound() {

  return (
    <Container>
      <Title>Ops!</Title>
      <Message>Eu sei que dói, mas o livro que você está procurando não foi encontrado! :c</Message>
      <Image src="/sorry.svg" alt="Homem pedindo desculpas" />
    </Container>
  );
}

export default NoBooksFound;