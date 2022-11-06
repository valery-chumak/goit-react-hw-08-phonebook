import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  display: block;
  padding: auto auto;
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', Helvetica,
    Arial, sans-serif;

  color: black;

  text-align: center;
  &.active {
    color: #8fce00;
  }
  &:hover {
    color: #b6d7a8;
  }
`;
export const NavList = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  min-height: 50px;
  padding: 10px 20px;
  align-items: center;
  z-index: 2;
  background-color: white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
`;
