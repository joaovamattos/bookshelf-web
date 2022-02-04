import { useRouter } from 'next/router';
import React from 'react';
import { FiBook } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import Button from '../Button';

import { Container, Image, Row, Title, Message } from './styles';

interface CustomErrorProps {
  image: string;
  message: string;
}

function CustomError({ image, message }: CustomErrorProps) {
  const { theme } = useTheme();
  const router = useRouter();

  const handleGoToHome = () => {
    router.push('/');
  }

  return (
    <Container>
      <Row>
        <FiBook color={theme.colors.text} size={24} />
        <Title>Bookshelf</Title>
      </Row>
      <Image src={`/${image}.svg`} alt="Erro no sistema" />
      <Message>{message}</Message>
      <Button title='Voltar à página inicial' onClick={handleGoToHome} />
    </Container>
  );
}

export default CustomError;