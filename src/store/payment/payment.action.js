import { createAction } from '../../utils/reducer/reducer.utils';
import { PAYMENT_ACTION_TYPES } from './payment.types';

export const startPayment = (payload) =>
  createAction(PAYMENT_ACTION_TYPES.START_PAYMENT, payload);
export const paymentSucceed = (error) =>
  createAction(PAYMENT_ACTION_TYPES.PAYMENT_SUCCESS, error);
export const paymentFailed = (error) =>
  createAction(PAYMENT_ACTION_TYPES.PAYMENT_FAILED, error);
