import { CategoryItem } from '../categories/categories.types';

export enum CartActionTypes {
  SET_PRODUCTS = 'cart/SET_PRODUCTS',
  SET_DROPDOWN_VISIBILITY = 'cart/SET_DROPDOWN_VISIBILITY',
}

export type CartItem = CategoryItem & {
  quantity: number;
};
