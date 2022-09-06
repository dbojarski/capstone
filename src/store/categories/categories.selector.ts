import { createSelector } from 'reselect';
import { CategoriesState } from './categories.reducer';
import { CategoryMap } from './categories.types';
import { RootState } from '../root.reducer';

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categories) => categories.isLoading
);

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categories) => categories.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((current, next) => {
      const { title, items } = next;

      current[title.toLowerCase()] = items;

      return current;
    }, {} as CategoryMap)
);
