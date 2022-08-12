import { Container, Count, Icon } from './CartIcon.styles';

export function CartIcon({ onClick, cartCount }) {
  return (
    <Container onClick={onClick}>
      <Icon />
      <Count>{cartCount}</Count>
    </Container>
  );
}
