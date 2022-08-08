import './CartDropdown.scss';
import { Button } from '../button/Button';

export function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
