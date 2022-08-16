import { BackgroundImage, BodyContainer, Container } from './Category.styles';
import { useNavigate } from 'react-router-dom';

export function Category({ category: { title, imageUrl } }) {
  const navigate = useNavigate();
  const goToCategory = () => {
    navigate(`shop/${title}`);
  };

  return (
    <Container onClick={goToCategory}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </Container>
  );
}
