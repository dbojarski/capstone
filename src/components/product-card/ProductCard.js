import { Button, BUTTON_TYPE_CLASSES } from '../button/Button';
import { Container, Footer, Name, Price } from './ProductCard.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cart.selector';
import { addProductToCart } from '../../store/cart/cart.action';

export function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { products } = useSelector(selectCart);
  const dispatch = useDispatch();
  const addToCart = () => dispatch(addProductToCart(products, product));

  return (
    <Container>
      <img alt={name} src={imageUrl} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>

      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>
        Add to cart
      </Button>
    </Container>
  );
}
