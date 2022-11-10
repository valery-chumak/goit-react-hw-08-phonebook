import Contacts from 'components/Contacts/Contacts';
import css from './MyContactsPage.module.css';
//
const MyContactsPage = () => {
  return (
    <div className={css.Container}>
      <Contacts />
    </div>
  );
};

export default MyContactsPage;
