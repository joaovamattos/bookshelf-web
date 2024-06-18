import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  max-width: 80rem;
  width: 100%;
  height: 6rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavTitle = styled.h1`
  margin-left: 0.25rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const GithubButton = styled.a`
  height: 3rem;
  width: 3rem;

  background: ${(props) => props.theme.colors.foreground};
  border-radius: 0.25rem;

  font-weight: 600;

  transition: 0.3s ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-radius: 1.5rem;
    background: ${(props) => props.theme.colors.primary};

    svg {
      color: ${(props) => props.theme.colors.background} !important;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const Main = styled.main`
  max-width: 80rem;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  background: -webkit-linear-gradient(0, #4a26ab, #37435c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;

  @media (max-width: 30rem) {
    font-size: 3.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.125rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;

  @media (max-width: 52.5rem) {
    margin: 0 auto;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 60rem) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  height: 3rem;
  padding: 0 1rem;
  border: 0;
  border-radius: 0.25rem;

  background: ${(props) => props.theme.colors.text};
  background-image: linear-gradient(#4a26ab, #4a26ab);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position-x: right;
  transition: background-size 0.5s;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.125rem;
  color: ${(props) => props.theme.colors.foreground};
  white-space: nowrap;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-image: linear-gradient(#4a26ab, #4a26ab);
    background-size: 100% 100%;
    background-position-x: left;
  }

  & img {
    padding-right: 0.5rem !important;
  }
`;

export const OutlinedButton = styled.a`
  height: 3rem;
  padding: 0 1rem;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 0.25rem;

  background: ${(props) => props.theme.colors.background};
  background-image: linear-gradient(#4a26ab, #4a26ab);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position-x: right;
  transition: background-size 0.5s;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.125rem;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  white-space: nowrap;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-image: linear-gradient(#4a26ab, #4a26ab);
    background-size: 100% 100%;
    background-position-x: left;
    color: ${(props) => props.theme.colors.foreground};
    border-color: ${(props) => props.theme.colors.foreground};
    span {
      filter: brightness(100);
    }
  }

  & img {
    padding-right: 0.5rem !important;
  }
`;

export const ImageWrapper = styled.div`
  width: 32rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 2rem;
  }

  @media (max-width: 52.5rem) {
    display: none;
  }
`;
