import { NavLink } from 'react-router-dom';
import { StyledLink } from '../Navbar.styled';
import css from './NavbarAuth.module.css';
export default function NavbarAuth() {
  return (
    <div className={css.AuthContainer}>
      <StyledLink to="/register">Register</StyledLink>
      <span className={css.dash}> | </span>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
}
