import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

export function CartIcon({ onClick, cartCount }) {
  return (
    <div className='cart-icon-container' onClick={onClick}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
}
