import { createContext, ReactNode, useState, useContext } from 'react';
import { DocumentData } from 'firebase/firestore';

import {
  onAuthStateChangeListener,
  getUserDocument,
} from '../utils/firebase/auth';
import { getAllCategories } from '../utils/firebase/post';

type UserContextType = {
  user: DocumentData | undefined;
  categories: DocumentData[] | undefined;
  fetchCategories: () => void;
  getLoggedInUser: () => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<DocumentData | undefined>(undefined);
  const [categories, setCategories] = useState<DocumentData[] | undefined>(
    undefined,
  );

  const getLoggedInUser = () => {
    const unsubscribe = onAuthStateChangeListener(async (user: any) => {
      const loggedInUser = await getUserDocument(user.uid);
      setUser(loggedInUser?.data());
    });
    return unsubscribe;
  };

  const fetchCategories = async () => {
    const cats = await getAllCategories();
    setCategories(cats);
  };

  return (
    <UserContext.Provider
      value={{ user, categories, fetchCategories, getLoggedInUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
