import React from "react";
import { FaBars } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { Text } from "../../containers/LanguageProvider";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LanguageSelectorWrapper,
} from "./NavbarElements";
import LanguageSelector from "../LanguageSelector";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <BsMoonStarsFill />
            EasyNap
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                <Text tid="info-about" />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                <Text tid="services-header" />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                <Text tid="contact-header" />
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        <LanguageSelectorWrapper>
          <LanguageSelector />
        </LanguageSelectorWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
