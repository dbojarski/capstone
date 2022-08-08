import { createContext, useState } from 'react';

const cartContextDefaultValues = {
  setCartDropdownVisibility: () => {},
  isCartDropdownVisible: false,
  products: [],
};

export const CartContext = createContext(cartContextDefaultValues);

export function CartProvider({ children }) {
  const [isCartDropdownVisible, setCartDropdownVisibility] = useState(false);
  const value = {
    isCartDropdownVisible,
    setCartDropdownVisibility,
    products: [],
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
