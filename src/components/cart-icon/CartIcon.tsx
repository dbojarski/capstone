import { MouseEventHandler } from 'react';

import { Container, Count, Icon } from './CartIcon.styles';

type CartIconProps = {
  onClick: MouseEventHandler;
  cartCount: number;
};

export function CartIcon({ onClick, cartCount }: CartIconProps) {
  return (
    <Container onClick={onClick}>
      <Icon />
      <Count>{cartCount}</Count>
    </Container>
  );
}
