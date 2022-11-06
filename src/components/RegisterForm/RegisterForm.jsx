import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import useForm from '../../shared/hooks/useForm';
import TextField from 'shared/TextField/TextField';
import initialState from './initialState';
import fields from './fields';
import css from './RegisterForm.module.css';
const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const { name, email, password } = state;

  return (
    <div className={css.Section}>
      <form className={css.Form} onSubmit={handleSubmit}>
        <h2 className={css.SubTitle}>Please, Register</h2>
        <TextField
          id={nameId}
          value={name}
          className={css.TextField}
          handleChange={handleChange}
          {...fields.name}
        />
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
        <button className={css.Button}>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;

RegisterForm.defaultProps = {
  onSubmit: () => {},
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
