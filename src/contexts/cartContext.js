import { createContext, useEffect, useState } from 'react';

const cartContextDefaultValues = {
  setCartDropdownVisibility: () => {},
  isCartDropdownVisible: false,
  products: [],
  addProductToCart: () => {},
  cartCount: 0,
};

export const CartContext = createContext(cartContextDefaultValues);

export function CartProvider({ children }) {
  const [isCartDropdownVisible, setCartDropdownVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addProductToCart = (product) => {
    const existingProduct = products.find((item) => item.id === product.id);

    if (existingProduct) {
      setProducts(
        products.map((item) => {
          return item === existingProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );

      return;
    }

    setProducts([...products, { ...product, quantity: 1 }]);
  };
  const value = {
    isCartDropdownVisible,
    setCartDropdownVisibility,
    products,
    addProductToCart,
    cartCount,
  };

  useEffect(() => {
    setCartCount(
      products.reduce((previous, current) => previous + current.quantity, 0)
    );
  }, [products]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
