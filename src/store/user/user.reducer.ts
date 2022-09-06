import { User } from './user.types';
import { AnyAction } from 'redux';
import {
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from './user.action';

export type UserState = {
  readonly currentUser: User | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, isLoading: false, currentUser: action.payload };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  if (googleSignInStart.match(action) || emailSignInStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  return state;
};
