import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import { FormInput } from '../form-input/FormInput';
import './SignUpForm.scss';
import { Button } from '../button/Button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = ({ target: { name, value } }) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth({ ...user, displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display name'
          name='displayName'
          type='text'
          required
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label='Email'
          name='email'
          type='email'
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          name='password'
          type='password'
          required
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}
