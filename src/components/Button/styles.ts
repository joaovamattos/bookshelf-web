import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 0.25rem;

  background: ${(props) => props.theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    border-radius: 2rem;
    background: ${(props) => props.theme.colors.primary};

    p {
      color: ${(props) => props.theme.colors.background};
    }
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`;
