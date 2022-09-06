import { FormInput } from '../form-input/FormInput';
import { Button, BUTTON_TYPE } from '../button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ButtonsContainer, Container } from './SignInForm.styles';
import { useDispatch } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action';

const signInDefaultFields = {
  email: '',
  password: '',
};

export function SignInForm() {
  const dispatch = useDispatch();
  const [signInFields, setSignInFields] = useState(signInDefaultFields);
  const { email, password } = signInFields;

  const signInWithGoogle = () => dispatch(googleSignInStart());

  const signIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSignInFields({ ...signInFields, [name]: value });
  };

  return (
    <Container>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={signIn}>
        <FormInput
          name='email'
          label='Email'
          type='email'
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          name='password'
          label='Password'
          type='password'
          value={password}
          required
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  );
}
