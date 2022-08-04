import { CategoryList } from './components/category-list/CategoryList';
import { CATEGORIES } from './constants/categories.constants';

function App() {
  return <CategoryList categories={CATEGORIES} />;
}

export default App;
