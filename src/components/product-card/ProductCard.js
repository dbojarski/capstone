import './ProductCard.scss';
import { Button } from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

export function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addProductToCart } = useContext(CartContext);
  const addToCart = () => addProductToCart(product);

  return (
    <div className='product-card-container'>
      <img alt={name} src={imageUrl} />

      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <Button buttonType='inverted' onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  );
}
