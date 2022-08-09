import './Checkout.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { CheckoutItem } from '../../components/checkout-item/CheckoutItem';

export function Checkout() {
  const { products, totalPrice } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>

        <div className='header-block'>
          <span>Description</span>
        </div>

        <div className='header-block'>
          <span>Quantity</span>
        </div>

        <div className='header-block'>
          <span>Price</span>
        </div>

        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {products.map((product) => (
        <CheckoutItem key={product.id} product={product} />
      ))}
      <span className='total'>Total: ${totalPrice}</span>
    </div>
  );
}
