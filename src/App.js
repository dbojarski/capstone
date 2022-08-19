import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChanged,
} from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChanged(async (user) => {
      dispatch(setCurrentUser(user));

      if (user) {
        await createUserDocumentFromAuth(user);
      }
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
