import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import image from '../../../images/avatar.jpg';
import css from './NavbarUser.module.css';
import { getUser } from 'redux/auth/auth-selectors';
export default function NavbarUser() {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.Wrapper}>
      <span className={css.Phrase}>
        <img className={css.Image} src={image} alt="avatar" />
        {/* {`Hello, ${user.name}`} */}
        {name && `Hello, ${name}`}
      </span>

      <button className={css.Button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
