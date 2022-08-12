import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categoriesContext';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/ProductCard';
import { ProductsContainer, ProductTitle } from './CategoryProducts.styles';

export function CategoryProducts() {
  const { categoriesMap } = useContext(CategoriesContext);
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
