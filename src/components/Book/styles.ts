import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const BookCover = styled.img`
  width: 6.25rem;
  height: 9.375rem;
  object-fit: cover;
`;

export const Title = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 6.25rem;
`;

export const Author = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.lightText};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 6.25rem;
`;
