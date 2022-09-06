import { CartItem as CartItemComponent } from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/Button';
import { Container, EmptyMessage, ItemsContainer } from './CartDropdown.styles';
import { CartItem } from '../../store/cart/cart.types';

type CartDropdownProps = {
  products: CartItem[];
};

export function CartDropdown({ products }: CartDropdownProps) {
  const navigate = useNavigate();
  const goToCheckout = () => navigate('/checkout');

  return (
    <Container>
      <ItemsContainer>
        {products.length ? (
          products.map((product) => (
            <CartItemComponent key={product.id} product={product} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </ItemsContainer>
      {!!products.length && (
        <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
      )}
    </Container>
  );
}
