import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selectors';
export default function LoginPage() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);
  const onLogin = data => {
    dispatch(login(data));
  };
  if (isUserLogin) {
    return <Navigate to="/my-contacts" />;
  }
  return (
    <div className={css.Container}>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
}
