import './CartDropdown.scss';
import { Button } from '../button/Button';
import { CartItem } from '../cart-item/CartItem';

export function CartDropdown({ products }) {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
