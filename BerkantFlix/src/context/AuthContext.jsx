import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState('');

  // function signUp(email, password, username) {
  //   createUserWithEmailAndPassword(auth, email, password);
  //   setDoc(doc(db, 'users', email), {
  //     username: username,
  //     savedMovies: [],
  //     savedShows: [],
  //   });
  // }

  async function signUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', email), {
      savedMoviesOrShows: [],
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
}

export function UserAuth() {
  return useContext(AuthContext);
}
