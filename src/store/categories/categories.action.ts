import { CategoriesActionType, Category } from './categories.types';
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';

export type FetchCategoriesStart =
  Action<CategoriesActionType.fetchCategoriesStart>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CategoriesActionType.fetchCategoriesSuccess,
  Category[]
>;

export type FetchCategoriesFail = ActionWithPayload<
  CategoriesActionType.fetchCategoriesFail,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CategoriesActionType.fetchCategoriesStart)
);

export const fetchCategoriesSuccess = withMatcher(
  (categories: Category[]): FetchCategoriesSuccess =>
    createAction(CategoriesActionType.fetchCategoriesSuccess, categories)
);

export const fetchCategoriesFail = withMatcher(
  (error: Error): FetchCategoriesFail =>
    createAction(CategoriesActionType.fetchCategoriesFail, error)
);
