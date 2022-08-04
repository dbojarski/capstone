import { CategoryList } from '../../components/category-list/CategoryList';
import { CATEGORIES } from '../../constants/categories.constants';

export function Home() {
  return <CategoryList categories={CATEGORIES} />;
}
