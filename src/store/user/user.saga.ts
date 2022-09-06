import { User } from 'firebase/auth';
import { all, call, put, takeLatest } from 'typed-redux-saga/macro';

import { UserActionType } from './user.types';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithCredentials,
  signInWithGooglePopup,
  signOut,
} from '../../utils/firebase/firebase.utils';
import {
  EmailSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  SignUpStart,
  SignUpSuccess,
  signUpSuccess,
} from './user.action';

function* getSnapshotFromUserAuth(userAuth: User) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth);

    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

function* checkUserSession() {
  try {
    const user = yield* call(getCurrentUser);

    if (!user) {
      return;
    }

    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
  try {
    const { user } = yield* call(signInWithCredentials, email, password);

    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

function* onSignInWithCredentials() {
  yield* takeLatest(UserActionType.emailSignInStart, signInWithEmail);
}

function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);

    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

function* signOutFromApplication() {
  try {
    yield* call(signOut);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;

      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

function* signInAfterSignUp({ payload: { user } }: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user);
}

function* onSignUpSuccess() {
  yield* takeLatest(UserActionType.signUpSuccess, signInAfterSignUp);
}

function* onCheckUserSession() {
  yield* takeLatest(UserActionType.checkUserSession, checkUserSession);
}

function* onSignInWithGoogle() {
  yield* takeLatest(UserActionType.googleSignInStart, signInWithGoogle);
}

function* onSignOut() {
  yield* takeLatest(UserActionType.signOutStart, signOutFromApplication);
}

function* onSignUpStart() {
  yield* takeLatest(UserActionType.signUpStart, signUp);
}
export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onSignInWithGoogle),
    call(onSignInWithCredentials),
    call(onSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
