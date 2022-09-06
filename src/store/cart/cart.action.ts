import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CartActionTypes, CartItem } from './cart.types';
import { addProduct, removeProduct } from './cart.utils';
import { CategoryItem } from '../categories/categories.types';

export type SetCartDropdownVisibility = ActionWithPayload<
  CartActionTypes.SET_DROPDOWN_VISIBILITY,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CartActionTypes.SET_PRODUCTS,
  CartItem[]
>;

export const setCartDropdownVisibility = withMatcher(
  (visible: boolean): SetCartDropdownVisibility =>
    createAction(CartActionTypes.SET_DROPDOWN_VISIBILITY, visible)
);

export const removeProductFromCart = withMatcher(
  (
    products: CartItem[] = [],
    product: CartItem,
    removeCompletely = false
  ): SetCartItems => {
    console.log({ products, product });
    return createAction(
      CartActionTypes.SET_PRODUCTS,
      removeProduct(products, product, removeCompletely)
    );
  }
);

export const addProductToCart = withMatcher(
  (products: CartItem[] = [], product: CategoryItem): SetCartItems =>
    createAction(CartActionTypes.SET_PRODUCTS, addProduct(products, product))
);
