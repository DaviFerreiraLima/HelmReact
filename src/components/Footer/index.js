import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialLogo,
 
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Front-End</FooterLinkTitle>
              <FooterLink to="/">Gustavo da Silva Vieira</FooterLink>
              
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Back-End</FooterLinkTitle>
              <FooterLink to="/">Gutemberg Reino</FooterLink>
              
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Documentação</FooterLinkTitle>
              <FooterLink to="/">Iara Caetano</FooterLink>
              
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Orientador</FooterLinkTitle>
              <FooterLink to="/">jean Nascimento</FooterLink>
             
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              FinanDigio!
            </SocialLogo>
           
            <SocialIcons>
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
