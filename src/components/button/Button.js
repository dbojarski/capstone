import * as Styles from './Button.styles';
import { ButtonSpinner } from './Button.styles';

export const BUTTON_TYPE_CLASSES = {
  default: Styles.Button,
  google: Styles.ButtonGoogle,
  inverted: Styles.ButtonInverted,
};

const BUTTON_TYPE_COMPONENTS = {
  [BUTTON_TYPE_CLASSES.default]: Styles.Button,
  [BUTTON_TYPE_CLASSES.google]: Styles.ButtonGoogle,
  [BUTTON_TYPE_CLASSES.inverted]: Styles.ButtonInverted,
};

export function Button({
  children,
  buttonType = Styles.Button,
  isLoading,
  ...props
}) {
  const ButtonComponent = BUTTON_TYPE_COMPONENTS[buttonType];

  return (
    <ButtonComponent disabled={isLoading} {...props}>
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonComponent>
  );
}
