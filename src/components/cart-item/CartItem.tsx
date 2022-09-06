import { Container, DetailsContainer, Img, Name } from './CartItem.styles';
import { CartItem as CartItemType } from '../../store/cart/cart.types';

type CartItemProps = {
  product: CartItemType;
};

export function CartItem({ product }: CartItemProps) {
  const { name, imageUrl, quantity, price } = product;

  return (
    <Container>
      <Img src={imageUrl} alt={name} />
      <DetailsContainer>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </DetailsContainer>
    </Container>
  );
}
