import React from "react";
import { FaBars } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
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
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
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
