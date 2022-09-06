import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';
import { RootState } from '../root.reducer';

export const selectCart = ({ cart }: RootState): CartState => cart;
export const selectCartItems = createSelector(
  [selectCart],
  ({ products }) => products
);
export const selectCartCount = createSelector([selectCartItems], (products) =>
  products.reduce((previous, current) => previous + current.quantity, 0)
);
export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (products) =>
    products.reduce((current, next) => current + next.price * next.quantity, 0)
);
