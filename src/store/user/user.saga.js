import { all, call, put, takeLatest } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithCredentials,
  signInWithGooglePopup,
  signOut,
} from '../../utils/firebase/firebase.utils';
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from './user.action';

function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* checkUserSession() {
  try {
    const user = yield call(getCurrentUser);

    if (!user) {
      return;
    }

    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithCredentials, email, password);

    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* onSignInWithCredentials() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);

    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signOutFromApplication() {
  try {
    yield call(signOut);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, checkUserSession);
}

function* onSignInWithGoogle() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutFromApplication);
}

function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignInWithGoogle),
    call(onSignInWithCredentials),
    call(onSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
