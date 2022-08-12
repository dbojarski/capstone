import { FormInput } from '../form-input/FormInput';
import { Button, BUTTON_TYPE_CLASSES } from '../button/Button';
import {
  signInWithCredentials,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import { ButtonsContainer, Container } from './SignInForm.styles';

const signInDefaultFields = {
  email: '',
  password: '',
};

export function SignInForm() {
  const [signInFields, setSignInFields] = useState(signInDefaultFields);
  const { email, password } = signInFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

    try {
      setSignInFields(signInDefaultFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const signIn = async (event) => {
    event.preventDefault();

    try {
      await signInWithCredentials(email, password);
      setSignInFields(signInDefaultFields);
    } catch (error) {}
  };

  const handleChange = ({ target: { name, value } }) => {
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
            buttonType={BUTTON_TYPE_CLASSES.google}
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
