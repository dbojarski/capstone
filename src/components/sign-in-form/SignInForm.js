import { FormInput } from '../form-input/FormInput';
import { Button } from '../button/Button';
import {
  createUserDocumentFromAuth,
  signInWithCredentials,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import './SignInForm.scss';

const signInDefaultFields = {
  email: '',
  password: '',
};

export function SignInForm() {
  const [signInFields, setSignInFields] = useState(signInDefaultFields);
  const { email, password } = signInFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

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
    <div className='sign-in-container'>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
}
