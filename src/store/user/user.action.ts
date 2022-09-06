import { User as FirebaseUser } from 'firebase/auth';

import { createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import { User, UserActionType } from './user.types';

export const setCurrentUser = withMatcher((user: User) =>
  createAction(UserActionType.setCurrentUser, user)
);

export const checkUserSession = withMatcher(() =>
  createAction(UserActionType.checkUserSession)
);

// signing in actions
export const googleSignInStart = withMatcher(() =>
  createAction(UserActionType.googleSignInStart)
);

export type EmailSignInStart = {
  type: UserActionType.emailSignInStart;
  payload: { email: string; password: string };
};

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(UserActionType.emailSignInStart, { email, password })
);

export const signInSuccess = withMatcher((user: User & { id: string }) =>
  createAction(UserActionType.signInSuccess, user)
);

export const signInFailed = withMatcher((error: Error) =>
  createAction(UserActionType.signInFailed, error)
);

//signing up actions
export type SignUpStart = {
  type: UserActionType.signUpStart;
  payload: {
    email: string;
    password: string;
    displayName: string;
  };
};

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(UserActionType.signUpStart, {
      email,
      password,
      displayName,
    })
);

export type SignUpSuccess = {
  type: UserActionType.signUpSuccess;
  payload: {
    user: FirebaseUser;
  };
};

export const signUpSuccess = withMatcher(
  (
    user: FirebaseUser,
    additionalDetails?: Record<string, any>
  ): SignUpSuccess =>
    createAction(UserActionType.signUpSuccess, { user, additionalDetails })
);

export const signUpFailed = withMatcher((error: Error) =>
  createAction(UserActionType.signUpFailed, error)
);

// signing out actions
export const signOutStart = withMatcher(() =>
  createAction(UserActionType.signOutStart)
);

export const signOutSuccess = withMatcher(() =>
  createAction(UserActionType.signOutSuccess)
);

export const signOutFailed = withMatcher((error: Error) =>
  createAction(UserActionType.signOutFailed, error)
);
