import { Button, BUTTON_TYPE_CLASSES } from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { Container, Footer, Name, Price } from './ProductCard.styles';

export function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addProductToCart } = useContext(CartContext);
  const addToCart = () => addProductToCart(product);

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
