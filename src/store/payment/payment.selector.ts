import { RootState } from '../root.reducer';

export const selectPaymentIsLoading = (state: RootState): boolean =>
  state.payment.isLoading;
export const selectPaymentSucceed = (state: RootState): boolean =>
  state.payment.succeed;
