import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUserSession } from './store/user/user.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
