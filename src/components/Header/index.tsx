import { FC } from 'react';
import { Block, HeaderContainer, MenuButton, Title } from './styles';
import { ReactComponent as HamburgerIcon } from '../../assets/img/Hamburger.svg';
import { HeaderProps } from '../../types';


const Header: FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <HeaderContainer>
      <MenuButton onClick={toggleMenu}>
        <HamburgerIcon />
      </MenuButton>
      <Title>BESIDER</Title>
      <Block />
    </HeaderContainer>
  );
};

export default Header;