import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';
import { addProduct, removeProduct } from './cart.utils';

export const setCartDropdownVisibility = (visible) =>
  createAction(CART_ACTION_TYPES.SET_DROPDOWN_VISIBILITY, visible);

export const removeProductFromCart = (products, product, removeCompletely) =>
  createAction(
    CART_ACTION_TYPES.SET_PRODUCTS,
    removeProduct(products, product, removeCompletely)
  );

export const addProductToCart = (products, product) =>
  createAction(CART_ACTION_TYPES.SET_PRODUCTS, addProduct(products, product));
