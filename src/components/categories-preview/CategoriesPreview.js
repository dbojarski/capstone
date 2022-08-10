import { CategoryPreview } from '../category-preview/CategoryPreview';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categoriesContext';

export function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

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
