import { Menu, MenuItem, MenuButton } from "reakit";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  max-width: 42rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem auto;
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

  :first-child {
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 1rem;
  height: 1.75rem;
  width: 1.75rem;

  background: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  padding: 0.5 0;

  cursor: pointer;
`;

export const StyledMenu = styled(Menu)`
  background: ${(props) => props.theme.colors.foreground};

  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
`;

export const StyledMenuItem = styled(MenuItem)`
  height: 2rem;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.colors.foreground};

  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};

  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledMenuButton = styled(MenuButton)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
`;

export const TooltipButton = styled.span`
  background: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
`;
