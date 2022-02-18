import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 42rem;
  cursor: pointer;
`;

export const BookCover = styled.img`
  min-width: 7.5rem;
  height: 11.25rem;
  object-fit: cover;
  margin-right: 1rem;
`;

export const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

export const Author = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.lightText};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 0.25rem;
  background: #c1c1c6;
`;

interface ProgressProps {
  progress: number;
}

export const Progress = styled.div<ProgressProps>`
  width: ${(props) => props.progress}%;
  height: 0.25rem;
  background: ${(props) => props.theme.colors.text};
  position: relative;
  top: 0.75rem;
  z-index: 999;
`;

export const ProgressDescription = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: right;
  color: ${(props) => props.theme.colors.lightText};
`;
