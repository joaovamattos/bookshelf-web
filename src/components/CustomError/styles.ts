import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.theme.colors.background};

  max-width: 32rem;
  width: 100%;
  height: 100vh;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 32rem;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Message = styled.p`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1.5rem;
  max-width: 20rem;
`;

export const Title = styled.h1`
  margin-left: 0.25rem;
  font-size: 2rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
