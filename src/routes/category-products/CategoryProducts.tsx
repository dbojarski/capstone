import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/ProductCard';
import { ProductsContainer, ProductTitle } from './CategoryProducts.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { CategoryItem } from '../../store/categories/categories.types';

type CategoryRouteParams = {
  category: string;
};

export function CategoryProducts() {
  const categoriesMap: Record<string, CategoryItem[]> =
    useSelector(selectCategoriesMap);
  const { category } = useParams() as CategoryRouteParams;
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(
    () => setProducts(categoriesMap[category]),
    [category, categoriesMap]
  );

  return (
    <>
      <ProductTitle>{category}</ProductTitle>
      <ProductsContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </>
  );
}
