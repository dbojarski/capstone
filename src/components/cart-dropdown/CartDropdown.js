import './CartDropdown.scss';
import { Button } from '../button/Button';
import { CartItem } from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';

export function CartDropdown({ products }) {
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout', { replaceUrl: true });
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      {!!products.length && (
        <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
      )}
    </div>
  );
}
