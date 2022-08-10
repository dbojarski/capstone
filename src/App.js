import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { UserProvider } from './contexts/userContext';
import { CategoriesProvider } from './contexts/categoriesContext';
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  );
}

export default App;
