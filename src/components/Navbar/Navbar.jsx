import React from 'react';
import { StyledLink, NavList } from './Navbar.styled';
import NavbarAuth from './NavbarAuth/NavbarAuth';
export default function Navbar() {
  return (
    <NavList>
      <StyledLink to="/">Logo</StyledLink>
      <StyledLink to="/my-contacts">Contacts</StyledLink>
      {/* <NavbarMenu /> */}
      <NavbarAuth />
    </NavList>
  );
}
