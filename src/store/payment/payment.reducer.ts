import { AnyAction } from 'redux';
import { paymentFailed, paymentSucceed, startPayment } from './payment.action';

export type PaymentState = {
  readonly error: Error | null;
  readonly isLoading: boolean;
  readonly succeed: boolean;
};

const INITIAL_STATE: PaymentState = {
  error: null,
  isLoading: false,
  succeed: false,
};
export const paymentReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (startPayment.match(action)) {
    return { ...state, isLoading: true, succeed: false };
  }

  if (paymentSucceed.match(action)) {
    return { ...state, isLoading: false, succeed: true };
  }

  if (paymentFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
      succeed: false,
    };
  }

  return state;
};
