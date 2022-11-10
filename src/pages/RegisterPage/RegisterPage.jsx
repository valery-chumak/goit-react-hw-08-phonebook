import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
//redux
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div className={css.Container}>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
}
