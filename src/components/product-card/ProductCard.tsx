import {
  Container,
  Footer,
  Name,
  Price,
  AddButton,
} from './ProductCard.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cart.selector';
import { addProductToCart } from '../../store/cart/cart.action';
import { CategoryItem } from '../../store/categories/categories.types';

type ProductCardProps = {
  product: CategoryItem;
};

export function ProductCard({ product }: ProductCardProps) {
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

      <AddButton onClick={addToCart}>Add to cart</AddButton>
    </Container>
  );
}
