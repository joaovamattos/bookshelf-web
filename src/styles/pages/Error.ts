import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
