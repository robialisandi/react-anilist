import styled from 'styled-components';
import { color } from '../../utils/style';
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: #fbfbfb;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1012px;
`;

export const NavLogo = styled(Link)`
  color: ${color.darkFont} !important;
  justify-self: flex-start;

  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none !important;
  &:hover {
    transform: translateY(-1px);
    text-decoration: none;
    color: ${color.darkFont};
  }

  @media screen and (min-width: 400px) {
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  margin-bottom: 0;
  margin-right: 20px !important;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  &.hover: {
    color: red;
  }
`;

export const NavLinks = styled.div`
  color: ${color.darkFont};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${color.primary};
  }
  &.active {
    border-bottom: 1px solid ${color.primary};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: ${color.secondary};
  padding: 7px 19px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    transform: translateY(-1px);
    background: ${color.primary};
    color: #fff;
  }
`;

export const RightNav = styled.div`
  display: flex;
` 

