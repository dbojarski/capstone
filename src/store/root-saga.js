import { all, call } from 'redux-saga/effects';
import { categoriesSagas } from './categories/categories.saga';
import { userSagas } from './user/user.saga';
import { paymentSagas } from './payment/payment.saga';

export function* rootSaga() {
  yield all([call(categoriesSagas), call(userSagas), call(paymentSagas)]);
}
