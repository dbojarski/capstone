import { CATEGORIES_ACTION_TYPES } from './categories.types';

const INITIAL_STATE = {
  categories: [],
  error: null,
  isLoading: false,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
