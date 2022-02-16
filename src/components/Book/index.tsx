import React from "react";

import { Container, BookCover, Title, Author } from "./styles";

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

function Book({ book }: BookProps) {
  return (
    <Container>
      <BookCover src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '/book-cover.png'} alt={book.volumeInfo.title} />
      <Title>{book.volumeInfo.title}</Title>
      <Author>{book.volumeInfo.authors}</Author>
    </Container>
  );
};

export default Book;