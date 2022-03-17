import React from 'react';
import { DataMenu } from '../../utils/data';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  RightNav
} from './navbarElement.js';

export const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" spy={true} smooth={true} offset={-80} duration={500}>
          Sayurbox Test.
        </NavLogo>
        <RightNav>
        <NavMenu>
          {DataMenu &&
            DataMenu.map((item, index) => {
              return (
                <NavItem key={index}>
                  <NavLinks
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    {item.label}
                  </NavLinks>
                </NavItem>
              );
            })}
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            to="cta"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Let's Start
          </NavBtnLink>
        </NavBtn>
        </RightNav>
      </NavbarContainer>
    </Nav>
  );
};
