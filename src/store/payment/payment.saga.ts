import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { PaymentActionType } from './payment.types';
import {
  paymentFailed,
  paymentSucceed,
  StartPayment,
  StartPaymentPayload,
} from './payment.action';

function* confirmCardPayment(
  payload: StartPaymentPayload,
  clientSecret: string
) {
  try {
    if (payload.stripe && payload.cardElement) {
      yield* call(payload.stripe.confirmCardPayment, clientSecret, {
        payment_method: {
          card: payload.cardElement,
          billing_details: {
            name: payload.name,
          },
        },
      });
    }

    yield* put(paymentSucceed());
  } catch (error) {
    yield* put(paymentFailed(error as Error));
  }
}

function* createPaymentIntent(payload: StartPaymentPayload) {
  try {
    const fetchPaymentIntend = async () => {
      return await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: payload.amount * 100 }),
      }).then((res) => res.json());
    };

    const response = yield* call(fetchPaymentIntend);

    yield* call(
      confirmCardPayment,
      payload,
      response.paymentIntent.client_secret
    );
  } catch (error) {
    yield* put(paymentFailed(error as Error));
  }
}

function* pay({ payload }: StartPayment) {
  try {
    yield* createPaymentIntent(payload);
  } catch (error) {
    yield* put(paymentFailed(error as Error));
  }
}

function* onPaymentStart() {
  yield* takeLatest(PaymentActionType.startPayment, pay);
}

export function* paymentSagas() {
  yield* all([call(onPaymentStart)]);
}
