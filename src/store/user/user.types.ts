export type User = {
  displayName: string;
  createdAt: Date;
  email: string;
};

export enum UserActionType {
  setCurrentUser = 'user/SET_CURRENT_USER',
  checkUserSession = 'user/CHECK_USER_SESSION',
  googleSignInStart = 'user/GOOGLE_SIGN_IN_START',
  emailSignInStart = 'user/EMAIL_SIGN_IN_START',
  signInSuccess = 'user/SIGN_IN_SUCCESS',
  signInFailed = 'user/SIGN_IN_FAILED',
  signOutStart = 'user/SIGN_OUT_START',
  signOutSuccess = 'user/SIGN_OUT_SUCCESS',
  signOutFailed = 'user/SIGN_OUT_FAILED',
  signUpStart = 'user/SIGN_UP_START',
  signUpSuccess = 'user/SIGN_UP_SUCCESS',
  signUpFailed = 'user/SIGN_UP_FAILED',
}
