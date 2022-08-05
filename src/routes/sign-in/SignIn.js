import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { SignUpForm } from '../../components/sign-up-form/SignUpForm';

export function SignIn() {
  const logIn = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign in page</h1>
      <button onClick={logIn}>Sign in with google</button>
      <SignUpForm />
    </>
  );
}
