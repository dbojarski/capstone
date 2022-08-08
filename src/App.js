import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { UserProvider } from './contexts/userContext';
import { ProductsProvider } from './contexts/productsContext';
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
