import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import { db } from '../../firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';
import Card from './Card';
import CardForFavorites from './CardForFavorites';

const SavedMoviesShows = () => {
  const { user } = UserAuth();
  const [moviesShows, setMoviesShows] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMoviesShows(doc.data()?.savedMoviesOrShows);
    });
  }, [user?.email]);

  return (
    <div className="cards-favorites gap-5 mt-10">
      {moviesShows.map((item) => (
        <CardForFavorites
          key={item.id}
          result={item}
          type={item.type}
          movies={moviesShows}
        />
      ))}
    </div>
  );
};

export default SavedMoviesShows;
