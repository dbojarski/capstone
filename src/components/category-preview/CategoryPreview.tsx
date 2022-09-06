import { ProductCard } from '../product-card/ProductCard';
import { Container, ItemsContainer, Title } from './CategoryPreview.styles';
import { CategoryItem } from '../../store/categories/categories.types';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

export function CategoryPreview({ title, products }: CategoryPreviewProps) {
  return (
    <Container>
      <h2>
        <Title to={title}>{title}</Title>
      </h2>
      <ItemsContainer>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ItemsContainer>
    </Container>
  );
}
