import { BackgroundImage, BodyContainer, Container } from './Category.styles';
import { useNavigate } from 'react-router-dom';
import { CategoryItem } from '../../store/categories/categories.types';

type CategoryProps = {
  category: CategoryItem;
};

export function Category({ category: { name, imageUrl } }: CategoryProps) {
  const navigate = useNavigate();
  const goToCategory = () => {
    navigate(`shop/${name}`);
  };

  return (
    <Container onClick={goToCategory}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyContainer>
        <h2>{name}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </Container>
  );
}
