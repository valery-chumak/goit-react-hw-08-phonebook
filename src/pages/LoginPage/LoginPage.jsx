import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
export default function LoginPage() {
  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(login(data));
  };
  return (
    <div className={css.Container}>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
}
