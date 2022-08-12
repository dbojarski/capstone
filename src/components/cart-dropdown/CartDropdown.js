import { CartItem } from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/Button';
import { Container, EmptyMessage, ItemsContainer } from './CartDropdown.styles';

export function CartDropdown({ products }) {
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout', { replaceUrl: true });
  };

  return (
    <Container>
      <ItemsContainer>
        {products.length ? (
          products.map((product) => (
            <CartItem key={product.id} product={product} />
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
