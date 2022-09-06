import * as Styles from './Button.styles';
import { ButtonSpinner } from './Button.styles';
import { StyledComponentBase } from 'styled-components';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<
  Partial<{
    buttonType: BUTTON_TYPE;
    isLoading: boolean;
  }> &
    ButtonHTMLAttributes<HTMLButtonElement>
>;

export enum BUTTON_TYPE {
  default,
  google,
  inverted,
}

const BUTTON_TYPE_COMPONENTS: Record<
  BUTTON_TYPE,
  StyledComponentBase<'button', any>
> = {
  [BUTTON_TYPE.default]: Styles.Button,
  [BUTTON_TYPE.google]: Styles.ButtonGoogle,
  [BUTTON_TYPE.inverted]: Styles.ButtonInverted,
};

export function Button({
  children,
  buttonType = BUTTON_TYPE.default,
  isLoading,
  ...props
}: ButtonProps) {
  const ButtonComponent = BUTTON_TYPE_COMPONENTS[buttonType];

  return (
    <ButtonComponent disabled={isLoading} {...props}>
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonComponent>
  );
}
