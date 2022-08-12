import { Container, DetailsContainer, Img, Name } from './CartItem.styles';

export function CartItem({ product }) {
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
