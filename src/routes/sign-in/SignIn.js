import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

export function SignIn() {
  const logIn = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign in page</h1>
      <button onClick={logIn}>Sign in</button>
    </>
  );
}
