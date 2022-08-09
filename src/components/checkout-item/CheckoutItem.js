import './CheckoutItem.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

export function CheckoutItem({ product }) {
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = product;

  const removeItem = () => removeProductFromCart(product, true);
  const decreaseItem = () => removeProductFromCart(product);
  const increaseItem = () => addProductToCart(product);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img alt={name} src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        {quantity > 1 && (
          <div className='arrow' onClick={decreaseItem}>
            &#10094;
          </div>
        )}
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={increaseItem}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price * quantity}</span>
      <div className='remove-button' onClick={removeItem}>
        &#10005;
      </div>
    </div>
  );
}
