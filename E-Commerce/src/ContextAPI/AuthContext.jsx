import { createContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  async function signUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', email), {
      savedFavorites: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider
      value={{ signUp, logIn, updateProfile, logOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
