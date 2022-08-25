import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PAYMENT_ACTION_TYPES } from './payment.types';
import { paymentFailed, paymentSucceed } from './payment.action';

function* confirmCardPayment(payload, clientSecret) {
  try {
    yield call(payload.stripe.confirmCardPayment, clientSecret, {
      payment_method: {
        card: payload.cardElement,
        billing_details: {
          name: payload.name,
        },
      },
    });

    yield put(paymentSucceed());
  } catch (error) {
    yield put(paymentFailed(error));
  }
}

function* createPaymentIntent(payload) {
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

    const response = yield call(fetchPaymentIntend);

    yield call(
      confirmCardPayment,
      payload,
      response.paymentIntent.client_secret
    );
  } catch (error) {
    yield put(paymentFailed(error));
  }
}

function* pay({ payload }) {
  try {
    yield createPaymentIntent(payload);
  } catch (error) {
    yield put(paymentFailed(error));
  }
}

function* onPaymentStart() {
  yield takeLatest(PAYMENT_ACTION_TYPES.START_PAYMENT, pay);
}

export function* paymentSagas() {
  yield all([call(onPaymentStart)]);
}
