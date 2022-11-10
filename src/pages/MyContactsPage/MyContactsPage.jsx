// import { Navigate } from 'react-router-dom';
import Contacts from 'components/Contacts/Contacts';
import css from './MyContactsPage.module.css';
//
const MyContactsPage = () => {
  // const isUserLogin = useAuth();
  // if (!isUserLogin) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div className={css.Container}>
      <Contacts />
    </div>
  );
};

export default MyContactsPage;
