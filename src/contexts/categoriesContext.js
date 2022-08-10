import { createContext, useEffect, useState } from 'react';
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export function CategoriesProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getProductsCategories = async () => {
      const categories = await getCollectionAndDocuments('categories');

      setCategoriesMap(categories);
    };

    getProductsCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
