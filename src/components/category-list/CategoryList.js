import { Category } from '../category/Category';
import './CategoryList.scss';

export function CategoryList({ categories }) {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
