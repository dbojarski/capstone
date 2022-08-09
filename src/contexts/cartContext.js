import { createContext, useEffect, useState } from 'react';

const cartContextDefaultValues = {
  setCartDropdownVisibility: () => {},
  isCartDropdownVisible: false,
  products: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
};

export const CartContext = createContext(cartContextDefaultValues);

export function CartProvider({ children }) {
  const [isCartDropdownVisible, setCartDropdownVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) =>
    setProducts(addProduct(products, product));

  const removeProductFromCart = (product, removeCompletely = false) =>
    setProducts(removeProduct(products, product, removeCompletely));

  const value = {
    isCartDropdownVisible,
    setCartDropdownVisibility,
    products,
    addProductToCart,
    removeProductFromCart,
    cartCount,
    totalPrice,
  };

  useEffect(() => {
    setCartCount(
      products.reduce((previous, current) => previous + current.quantity, 0)
    );
  }, [cartCount, products]);

  useEffect(() => {
    setTotalPrice(
      products.reduce(
        (current, next) => current + next.price * next.quantity,
        0
      )
    );
  }, [totalPrice, products]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function removeProduct(products, product, removeCompletely) {
  const existingProduct = products.find((item) => item.id === product.id);

  if (existingProduct.quantity > 1 && !removeCompletely) {
    return products.map((item) => {
      return {
        ...item,
        quantity: item === existingProduct ? item.quantity - 1 : item.quantity,
      };
    });
  }

  return products.filter((item) => item.id !== product.id);
}

function addProduct(products, product) {
  const existingProduct = products.find((item) => item.id === product.id);

  if (existingProduct) {
    return products.map((item) => {
      return item === existingProduct
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...products, { ...product, quantity: 1 }];
}
