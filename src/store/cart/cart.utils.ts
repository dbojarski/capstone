import { CartItem } from './cart.types';
import { CategoryItem } from '../categories/categories.types';

export function removeProduct(
  products: CartItem[],
  product: CartItem,
  removeCompletely: boolean
): CartItem[] {
  const existingProduct = products.find((item) => item.id === product.id);

  if (existingProduct && existingProduct.quantity > 1 && !removeCompletely) {
    return products.map((item) => {
      return {
        ...item,
        quantity: item === existingProduct ? item.quantity - 1 : item.quantity,
      };
    });
  }

  return products.filter((item) => item.id !== product.id);
}

export function addProduct(
  products: CartItem[],
  product: CategoryItem
): CartItem[] {
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
