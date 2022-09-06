import { Category } from '../category/Category';
import { Container } from './CategoryList.styles';
import { CategoryItem } from '../../store/categories/categories.types';

export function CategoryList() {
  const categories: CategoryItem[] = [
    {
      id: 1,
      name: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      price: 0,
    },
    {
      id: 2,
      name: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      price: 0,
    },
    {
      id: 3,
      name: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      price: 0,
    },
    {
      id: 4,
      name: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      price: 0,
    },
    {
      id: 5,
      name: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      price: 0,
    },
  ];

  return (
    <Container>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </Container>
  );
}
