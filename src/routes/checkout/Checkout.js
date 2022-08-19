import { CheckoutItem } from '../../components/checkout-item/CheckoutItem';
import { Container, Header, HeaderBlock, Total } from './Checkout.styles';
import {
  selectCart,
  selectCartTotalPrice,
} from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

export function Checkout() {
  const { products } = useSelector(selectCart);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <Container>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {products.map((product) => (
        <CheckoutItem key={product.id} product={product} />
      ))}
      <Total>Total: ${totalPrice}</Total>
    </Container>
  );
}
