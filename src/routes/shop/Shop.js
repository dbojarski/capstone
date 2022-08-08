import { useContext } from 'react';
import { ProductsContext } from '../../contexts/productsContext';
import './Shop.scss';
import { ProductCard } from '../../components/product-card/ProductCard';

export function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
