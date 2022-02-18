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

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 2.25rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.375rem;
  padding-left: 0.75rem;
  border-radius: 0.25rem 0 0 0.25rem;

  color: ${(props) => props.theme.colors.text};
`;

export const InputIcon = styled.div`
  background: ${(props) => props.theme.colors.foreground};
  height: 3.375rem;
  padding: 0 0.75rem;

  border-radius: 0 0.25rem 0.25rem 0;

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 32rem;
  width: 100%;
  height: auto;
  object-fit: cover;
  align-self: center;
`;

export const BookList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
