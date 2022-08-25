import { PAYMENT_ACTION_TYPES } from './payment.types';

const INITIAL_STATE = {
  error: null,
  isLoading: false,
  succeed: false,
};
export const paymentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PAYMENT_ACTION_TYPES.START_PAYMENT:
      return { ...state, isLoading: true, succeed: false };
    case PAYMENT_ACTION_TYPES.PAYMENT_SUCCESS:
      return { ...state, isLoading: false, succeed: true };
    case PAYMENT_ACTION_TYPES.PAYMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        succeed: false,
      };
    default:
      return state;
  }
};
