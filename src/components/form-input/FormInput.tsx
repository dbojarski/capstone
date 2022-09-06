import { InputHTMLAttributes, PropsWithChildren } from 'react';

import { Group, Input, InputLabel } from './FormInput.styles';

type FormInputProps = PropsWithChildren<
  {
    label: string;
  } & InputHTMLAttributes<HTMLInputElement>
>;

export function FormInput({ label, ...otherProps }: FormInputProps) {
  return (
    <Group>
      <Input {...otherProps} />

      {label && (
        <InputLabel
          shrink={
            !!(
              otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
            )
          }
        >
          {label}
        </InputLabel>
      )}
    </Group>
  );
}
