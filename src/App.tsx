import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUserSession } from './store/user/user.action';
import { GlobalStyle } from './global.styles';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
