import { CartItem } from './cart.types';
import { AnyAction } from 'redux';
import {
  addProductToCart,
  removeProductFromCart,
  setCartDropdownVisibility,
} from './cart.action';

export type CartState = {
  readonly dropdownVisible: boolean;
  readonly products: CartItem[];
};

const INITIAL_STATE: CartState = {
  dropdownVisible: false,
  products: [],
};
export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartDropdownVisibility.match(action)) {
    return { ...state, dropdownVisible: action.payload };
  }

  if (addProductToCart.match(action) || removeProductFromCart.match(action)) {
    return { ...state, products: action.payload };
  }

  return state;
};
