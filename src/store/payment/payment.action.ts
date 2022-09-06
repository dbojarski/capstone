import { createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import { PaymentActionType } from './payment.types';
import { Stripe, StripeCardElement } from '@stripe/stripe-js';

export type StartPaymentPayload = {
  amount: number;
  stripe: Stripe | null;
  cardElement: StripeCardElement | null;
  name: string;
};

export type StartPayment = {
  type: PaymentActionType.startPayment;
  payload: StartPaymentPayload;
};

export const startPayment = withMatcher(
  (payload: StartPaymentPayload): StartPayment =>
    createAction(PaymentActionType.startPayment, { ...payload })
);
export const paymentSucceed = withMatcher(() =>
  createAction(PaymentActionType.paymentSuccess)
);
export const paymentFailed = withMatcher((error: Error) =>
  createAction(PaymentActionType.paymentFailed, error)
);
