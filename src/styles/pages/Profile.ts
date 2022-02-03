import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: column;
`;

export const Cover = styled.div`
  background: #e3e0f1;
  height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Email = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
  max-width: 42rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem auto;
`;
