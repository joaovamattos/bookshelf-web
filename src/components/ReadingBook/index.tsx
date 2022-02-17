import React from "react";
import Button from "../Button";

import { Container, BookCover, Title, Author, Column, Wrapper, ProgressBar, Progress, ProgressDescription } from "./styles";

interface BookProps {
  book: {
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
    };
  }
}

function ReadingBook({ book }: BookProps) {
  return (
    <Container>
      <BookCover src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '/book-cover.png'} alt={book.volumeInfo.title} />
      <Wrapper>
        <Column>
          <Title>{book.volumeInfo.title}</Title>
          <Author>{book.volumeInfo.authors}</Author>
        </Column>

        <Column>
          <Progress progress={40} />
          <ProgressBar />
          <ProgressDescription>{book.volumeInfo.pageCount} páginas - {40}% Completo</ProgressDescription>
        </Column>

        <Button title='Atualizar leitura' onClick={() => { }} />
      </Wrapper>
    </Container>
  );
};

export default ReadingBook;