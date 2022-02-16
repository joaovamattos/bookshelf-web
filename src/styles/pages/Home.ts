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
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Amount = styled.p`
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 0.25rem;
`;

export const SeeAllButton = styled.p`
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 0.25rem;
  cursor: pointer;
  padding: 0 0.25rem;
  transition: 0.2s ease-in;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const BookList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  padding-bottom: 1rem;
  max-width: 42rem;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.text};
  }
`;
