import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { login } from 'redux/auth/auth-operations';
// import useAuth from 'shared/hooks/useAuth';
export default function LoginPage() {
  const dispatch = useDispatch();
  // const isUserLogin = useAuth();
  const onLogin = data => {
    dispatch(login(data));
  };
  // if (isUserLogin) {
  //   return <Navigate to="/my-contacts" />;
  // }
  return (
    <div className={css.Container}>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
}
