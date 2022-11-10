import React from 'react';
import { StyledLink, NavList } from './Navbar.styled';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'shared/hooks/useAuth';

import { IconContext } from 'react-icons';
import { FaPhoneSquare } from 'react-icons/fa';
export default function Navbar() {
  const isLogin = useAuth();
  return (
    <NavList>
      <StyledLink to="/">
        <IconContext.Provider value={{ size: '40px' }}>
          <div>
            <FaPhoneSquare />
          </div>
        </IconContext.Provider>
      </StyledLink>
      {isLogin && <StyledLink to="/my-contacts">Contacts</StyledLink>}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </NavList>
  );
}
