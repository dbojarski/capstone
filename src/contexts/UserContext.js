import { createContext, useState, useEffect } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChanged,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    return onAuthStateChanged(async (user) => {
      setCurrentUser(user);

      if (user) {
        await createUserDocumentFromAuth(user);
      }
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
