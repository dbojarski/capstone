import { initializeApp } from 'firebase/app';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  getDoc,
  setDoc,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { User as UserData } from '../../store/user/user.types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);
export const signInWithCredentials = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);
export const signOut = async () => await firebaseSignOut(auth);
export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());

    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCollectionAndDocuments = async <T>(
  collectionName: string
): Promise<T[]> => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as T);
};

export const createUserDocumentFromAuth = async (
  userAuth: User
): Promise<QueryDocumentSnapshot<UserData>> => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userSnapshot as unknown as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseOnAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
