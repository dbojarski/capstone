import { BackgroundImage, BodyContainer, Container } from './Category.styles';

export function Category({ category: { title, imageUrl } }) {
  return (
    <Container>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </Container>
  );
}
