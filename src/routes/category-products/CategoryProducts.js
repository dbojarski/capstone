import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categoriesContext';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/ProductCard';
import './CategoryProducts.scss';

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
      <h2 className='category-products-title'>{category}</h2>
      <div className='category-products-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
