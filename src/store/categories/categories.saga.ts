import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import {
  fetchCategoriesFail,
  fetchCategoriesSuccess,
} from './categories.action';
import { takeLatest, all, call, put } from 'typed-redux-saga';
import { CategoriesActionType, Category } from './categories.types';

export function* fetchCategoriesAsync() {
  try {
    const fetchCategories = () =>
      getCollectionAndDocuments<Category>('categories');
    const categories = yield* call(fetchCategories);

    yield* put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield* put(fetchCategoriesFail(error as Error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CategoriesActionType.fetchCategoriesStart,
    fetchCategoriesAsync
  );
}

export function* categoriesSagas() {
  yield all([call(onFetchCategories)]);
}
