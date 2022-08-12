import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { signOut } from '../../utils/firebase/firebase.utils';
import { CartIcon } from '../cart-icon/CartIcon';
import { CartDropdown } from '../cart-dropdown/CartDropdown';
import { CartContext } from '../../contexts/cartContext';
import { Container, LogoLink, HeaderLink, HeaderLinks } from './Header.styles';

export function Header() {
  const { currentUser } = useContext(UserContext);
  const {
    isCartDropdownVisible,
    setCartDropdownVisibility,
    products,
    cartCount,
  } = useContext(CartContext);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {}
  };
  const toggleCartDropdown = () => {
    setCartDropdownVisibility(!isCartDropdownVisible);
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
      {isCartDropdownVisible && <CartDropdown products={products} />}
    </Container>
  );
}
