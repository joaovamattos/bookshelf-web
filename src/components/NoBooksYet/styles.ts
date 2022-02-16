import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 12rem;
  background: #e3e0f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0 1.5rem;
  cursor: pointer;
`;

export const Book = styled.div`
  max-width: 6.25rem;
  width: 100%;
  height: 9.375rem;
  background: #e3e0f1;
  border: 2px dashed ${(props) => props.theme.colors.primary};
  margin-right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const Image = styled.img`
  margin-left: 1.5rem;
  min-width: 10rem;
  height: auto;
  object-fit: cover;

  @media (max-width: 36rem) {
    display: none;
  }
`;
