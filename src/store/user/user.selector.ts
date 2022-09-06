import { User } from './user.types';
import { RootState } from '../root.reducer';

export const selectCurrentUser = (state: RootState): User | null =>
  state.user.currentUser;
