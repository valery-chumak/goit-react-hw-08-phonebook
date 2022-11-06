import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.scss';
import image from '../../images/error.jpg';
const NotFoundPage = () => {
  return (
    <div className={css.Container}>
      <img className={css.Image} src={image} alt="error" />
      <Link to="/">To home page</Link>
    </div>
  );
};

export default NotFoundPage;
