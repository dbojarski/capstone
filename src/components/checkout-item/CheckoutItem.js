import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import {
  Arrow,
  ImageContainer,
  Container,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from './CheckoutItem.styles';

export function CheckoutItem({ product }) {
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = product;

  const removeItem = () => removeProductFromCart(product, true);
  const decreaseItem = () => removeProductFromCart(product);
  const increaseItem = () => addProductToCart(product);

  return (
    <Container>
      <ImageContainer>
        <img alt={name} src={imageUrl} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        {quantity > 1 && <Arrow onClick={decreaseItem}>&#10094;</Arrow>}
        <Value>{quantity}</Value>
        <Arrow onClick={increaseItem}>&#10095;</Arrow>
      </Quantity>
      <Price>${price * quantity}</Price>
      <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
    </Container>
  );
}
