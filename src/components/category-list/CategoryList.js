import { Category } from '../category/Category';
import { Container } from './CategoryList.styles';

export function CategoryList({ categories }) {
  return (
    <Container>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </Container>
  );
}
