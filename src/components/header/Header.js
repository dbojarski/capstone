import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './Header.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { signOut } from '../../utils/firebase/firebase.utils';
import { CartIcon } from '../cart-icon/CartIcon';
import { CartDropdown } from '../cart-dropdown/CartDropdown';
import { CartContext } from '../../contexts/cartContext';

export function Header() {
  const { currentUser } = useContext(UserContext);
  const { isCartDropdownVisible, setCartDropdownVisibility, products } =
    useContext(CartContext);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {}
  };
  const toggleCartDropdown = () => {
    setCartDropdownVisibility(!isCartDropdownVisible);
  };

  return (
    <div className='Header'>
      <Link className='Header-logo' to='/'>
        <CrownLogo />
      </Link>

      <div className='Header-links'>
        <Link className='Header-link' to='/shop'>
          SHOP
        </Link>

        {currentUser ? (
          <span className='Header-link' onClick={handleSignOut}>
            SIGN OUT
          </span>
        ) : (
          <Link className='Header-link' to='/auth'>
            SIGN IN
          </Link>
        )}

        <CartIcon count={products.length} onClick={toggleCartDropdown} />
      </div>
      {isCartDropdownVisible && <CartDropdown />}
    </div>
  );
}
