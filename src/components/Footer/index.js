import React from "react";
import { BsMoonStarsFill, BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Text } from "../../containers/LanguageProvider";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLink to="/about">
                  <Text tid="info-about" />
                </FooterLink>
                <FooterLink to="/packages">
                  <Text tid="services-header" />
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/discovery">
                  <Text tid="footer-discovery" />
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/impressum">Impressum</FooterLink>
                <FooterLink to="/">Terms and conditions</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/">Privacy Policy</FooterLink>
                <FooterLink to="/">Cookie Policy (EU)</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                <BsMoonStarsFill />
                EasyNap
              </SocialLogo>
              <WebsiteRights>
                EasyNap &copy; {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="mailto: honoria90@gmail.com"
                  target="_blank"
                  aria-label="Email"
                >
                  <MdOutlineMailOutline />
                </SocialIconLink>
                <SocialIconLink
                  href="tel: 0049162307335"
                  target="_blank"
                  aria-label="Phone"
                >
                  <BsTelephone />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
