import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
  max-width: 42rem;
  width: 100%;
  margin: 1rem auto;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 32.75rem) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BookCover = styled.img`
  width: 9.375rem;
  height: 14rem;
  object-fit: cover;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 32.75rem) {
    text-align: center;
  }
`;

export const Author = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.lightText};

  @media (max-width: 32.75rem) {
    text-align: center;
  }
`;

export const Label = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-right: 0.25rem;
`;

export const Info = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 100%;

  @media (max-width: 32.75rem) {
    margin: 0;
    margin-top: 0.75rem;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 0.25rem;

  background: ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    border-radius: 2rem;
    background: ${(props) => props.theme.colors.background};

    p {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ButtonText = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.background};
`;

export const CancelButton = styled.button`
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 0.25rem;

  background: ${(props) => props.theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    border-radius: 2rem;
    background: ${(props) => props.theme.colors.background};

    p {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const CancelButtonText = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.background};
`;
