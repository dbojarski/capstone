import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

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
  (categories) =>
    categories.reduce((current, next) => {
      const { title, items } = next;

      current[title.toLowerCase()] = items;

      return current;
    }, {})
);
