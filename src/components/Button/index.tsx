import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  onClick: () => {};
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Button;