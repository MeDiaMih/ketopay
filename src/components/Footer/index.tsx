import { FooterContainer, FooterLinks, FooterLogo, FooterText, LinkText, LogoContainer } from './styles';
import logo from '../../assets/img/Logo.png';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <LinkText>Log In</LinkText>
        <LinkText>About Us</LinkText>
        <LinkText>Publishers</LinkText>
        <LinkText>Sitemap</LinkText>
      </FooterLinks>
      <LogoContainer>
        <FooterText>Powered by</FooterText>
        <FooterLogo src={logo} alt="Logo" />
      </LogoContainer>
      <FooterText>© 2023 Besider. Inspired by Insider</FooterText>
    </FooterContainer>
  );
};

export default Footer;