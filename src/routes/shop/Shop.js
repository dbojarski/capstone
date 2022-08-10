import './Shop.scss';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPreview } from '../../components/categories-preview/CategoriesPreview';
import { CategoryProducts } from '../category-products/CategoryProducts';

export function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<CategoryProducts />} />
    </Routes>
  );
}
