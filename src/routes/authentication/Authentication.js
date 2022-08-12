import { SignUpForm } from '../../components/sign-up-form/SignUpForm';
import { SignInForm } from '../../components/sign-in-form/SignInForm';
import { Container } from './Authentication.styles';

export function Authentication() {
  return (
    <Container>
      <SignInForm />
      <SignUpForm />
    </Container>
  );
}
