import React from "react";
import { BsMoonStarsFill, BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
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
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLink to="/about">About</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/packages">Packages</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/discovery">Discovery call</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/impressum">Impressum</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">
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
