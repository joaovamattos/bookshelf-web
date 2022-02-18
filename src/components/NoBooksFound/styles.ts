import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.theme.colors.background};

  max-width: 32rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 4rem;
  font-weight: 700;
`;

export const Message = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin: 1rem 0;
`;

export const Image = styled.img`
  max-width: 36rem;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 2rem;
`;
