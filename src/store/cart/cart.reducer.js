import { CART_ACTION_TYPES } from './cart.types';

const INITIAL_STATE = {
  dropdownVisible: false,
  products: [],
};
export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_DROPDOWN_VISIBILITY:
      return { ...state, dropdownVisible: payload };
    case CART_ACTION_TYPES.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
