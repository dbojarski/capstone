export enum CategoriesActionType {
  fetchCategoriesSuccess = 'categories/FETCH_CATEGORIES_SUCCESS',
  fetchCategoriesStart = 'categories/FETCH_CATEGORIES_START',
  fetchCategoriesFail = 'categories/FETCH_CATEGORIES_FAIL',
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
