import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import useForm from '../../shared/hooks/useForm';
import TextField from 'shared/TextField/TextField';
import initialState from './initialState';
import fields from './fields';
import css from './LoginForm.module.css';
const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const { email, password } = state;

  return (
    <div className={css.Section}>
      <form className={css.Form} onSubmit={handleSubmit}>
        <h2 className={css.SubTitle}>Please, Log In</h2>
        <TextField
          id={emailId}
          value={email}
          className={css.TextField}
          handleChange={handleChange}
          {...fields.email}
        />
        <TextField
          id={passwordId}
          value={password}
          className={css.TextField}
          handleChange={handleChange}
          {...fields.password}
        />
        <button className={css.Button}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

LoginForm.defaultProps = {
  onSubmit: () => {},
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
