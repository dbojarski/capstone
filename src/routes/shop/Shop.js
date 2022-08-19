import { Route, Routes } from 'react-router-dom';
import { CategoriesPreview } from '../../components/categories-preview/CategoriesPreview';
import { CategoryProducts } from '../category-products/CategoryProducts';
import { useEffect } from 'react';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.action';

export function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsCategories = async () => {
      const categories = await getCollectionAndDocuments('categories');

      dispatch(setCategories(categories));
    };

    getProductsCategories();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<CategoryProducts />} />
    </Routes>
  );
}
