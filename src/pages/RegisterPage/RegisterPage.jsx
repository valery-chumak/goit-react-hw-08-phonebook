import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selectors';
export default function RegisterPage() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);
  const onRegister = data => {
    dispatch(signup(data));
  };
  if (isUserLogin) {
    return <Navigate to="/my-contacts" />;
  }
  return (
    <div className={css.Container}>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
}
