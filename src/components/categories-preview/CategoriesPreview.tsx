import { CategoryPreview } from '../category-preview/CategoryPreview';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { CategoryItem } from '../../store/categories/categories.types';

export function CategoriesPreview() {
  const categoriesMap: Record<string, CategoryItem[]> =
    useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((categoryName) => (
        <CategoryPreview
          key={categoryName}
          title={categoryName}
          products={categoriesMap[categoryName]}
        />
      ))}
    </>
  );
}
