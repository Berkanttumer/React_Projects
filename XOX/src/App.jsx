import React from 'react';
import GameProvider from './components/context/gameProvider';
import Game from './components/Game';

const App = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default App;
