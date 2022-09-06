import { Category } from './categories.types';
import {
  fetchCategoriesFail,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from './categories.action';
import { AnyAction } from 'redux';

export type CategoriesState = {
  readonly categories: Category[];
  readonly error: Error | null;
  readonly isLoading: boolean;
};

const INITIAL_STATE: CategoriesState = {
  categories: [],
  error: null,
  isLoading: false,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, isLoading: false, categories: action.payload };
  }

  if (fetchCategoriesFail.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }

  return state;
};
