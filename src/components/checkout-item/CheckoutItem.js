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
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../store/cart/cart.action';
import { selectCart } from '../../store/cart/cart.selector';

export function CheckoutItem({ product }) {
  const dispatch = useDispatch();
  const { products } = useSelector(selectCart);
  const { name, imageUrl, price, quantity } = product;

  const removeItem = () =>
    dispatch(removeProductFromCart(products, product, true));
  const decreaseItem = () => dispatch(removeProductFromCart(products, product));
  const increaseItem = () => dispatch(addProductToCart(products, product));

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
