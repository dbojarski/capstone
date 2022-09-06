import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { CartIcon } from '../cart-icon/CartIcon';
import { CartDropdown } from '../cart-dropdown/CartDropdown';
import { Container, LogoLink, HeaderLink, HeaderLinks } from './Header.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { setCartDropdownVisibility } from '../../store/cart/cart.action';
import { selectCart, selectCartCount } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { CartState } from '../../store/cart/cart.reducer';

export function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { dropdownVisible, products }: CartState = useSelector(selectCart);
  const cartCount: number = useSelector(selectCartCount);

  const handleSignOut = () => dispatch(signOutStart());

  const toggleCartDropdown = () => {
    dispatch(setCartDropdownVisibility(!dropdownVisible));
  };

  return (
    <Container>
      <LogoLink to='/'>
        <CrownLogo />
      </LogoLink>
      <HeaderLinks>
        <HeaderLink to='/shop'>SHOP</HeaderLink>

        {currentUser ? (
          <HeaderLink as='span' onClick={handleSignOut}>
            SIGN OUT
          </HeaderLink>
        ) : (
          <HeaderLink to='/auth'>SIGN IN</HeaderLink>
        )}

        <CartIcon cartCount={cartCount} onClick={toggleCartDropdown} />
      </HeaderLinks>
      {dropdownVisible && <CartDropdown products={products} />}
    </Container>
  );
}
