import { useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
import Loader from './Loader/Loader';
import Navbar from './Navbar/Navbar';
import UserRoute from './UserRoutes';
import { getLoadingUserStatus } from 'redux/auth/auth-selectors';
export default function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <div>
      {isLoadingUser ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <UserRoute />
        </>
      )}
    </div>
  );
}
