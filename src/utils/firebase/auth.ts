import { async } from '@firebase/util';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, db } from './firebase.config';

type UserAuthType = {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserDocumentFromAuth = async (userAuth: UserAuthType) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL, emailVerified } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        emailVerified,
        bio: '',
      });
    } catch (error: any) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const emailPasswordLogin = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const sendVerificationEmail = async () => {
  if (auth.currentUser) return await sendEmailVerification(auth.currentUser);
};

export const sendEmailPasswordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email);
};

export const updateUserPassword = async (newPassword: string) => {
  if (auth.currentUser)
    return await updatePassword(auth.currentUser, newPassword);
};

export const onAuthStateChangeListener = (callback: () => void) => {
  return onAuthStateChanged(auth, callback);
};

export const logOut = async () => await signOut(auth);
