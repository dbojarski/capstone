import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/ProductCard';
import { ProductsContainer, ProductTitle } from './CategoryProducts.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

export function CategoryProducts() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
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
