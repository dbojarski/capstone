import { Group, Input, InputLabel } from './FormInput.styles';

export function FormInput({ label, ...props }) {
  return (
    <Group>
      <Input {...props} />

      {label && <InputLabel shrink={props.value.length}>{label}</InputLabel>}
    </Group>
  );
}
