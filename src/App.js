import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Header />
      <Outlet />
    </UserProvider>
  );
}

export default App;
