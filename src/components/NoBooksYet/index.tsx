import React from "react";

import { Container, Book, Message, Image } from "./styles";
import { FiPlus } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

const NoBooksYet: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <Book>
        <FiPlus color={theme.colors.primary} size={24} />
      </Book>
      <Message>Clique aqui e comece a adicionar livros</Message>
      <Image src={`/book-lover.svg`} alt="Mulher lendo um livro" />
    </Container>
  );
};

export default NoBooksYet;