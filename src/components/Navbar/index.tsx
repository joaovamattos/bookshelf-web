import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FiBook, FiSearch } from 'react-icons/fi';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

import { useMenuState } from "reakit/Menu";
import { Tooltip, TooltipReference, useTooltipState } from "reakit/Tooltip";

import { Avatar, Container, Row, Title, Button, StyledMenu, StyledMenuItem, StyledMenuButton, TooltipButton } from './styles';

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const { user, signOut } = useAuth();
  const router = useRouter();

  const menu = useMenuState();
  const tooltip = useTooltipState();

  async function handeSingOut() {
    await signOut();
  }

  return (
    <Container>
      <Link href="/home">
        <Row>
          <FiBook color={theme.colors.text} size={24} />
          <Title>Bookshelf</Title>
        </Row>
      </Link>

      <Row>
        <Button onClick={() => router.push('/search')}>
          <TooltipReference {...tooltip}>
            <FiSearch color={theme.colors.text} size={20} />
          </TooltipReference>
          <Tooltip {...tooltip} as={TooltipButton}>Procurar livros</Tooltip>
        </Button>
        {user &&
          <>
            <StyledMenuButton {...menu} aria-label="Menu">
              <Avatar src={user.avatar} />
            </StyledMenuButton>
            <StyledMenu {...menu}>
              <StyledMenuItem onClick={() => router.push('/profile')}>Meu perfil</StyledMenuItem>
              <StyledMenuItem onClick={handeSingOut}>Sair</StyledMenuItem>
            </StyledMenu>
          </>
        }
      </Row>
    </Container>
  )
}

export default Navbar;