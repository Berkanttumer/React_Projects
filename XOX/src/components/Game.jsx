import React, { useState } from 'react';
import { useContext } from 'react';
import { GameContext } from './context/gameProvider';

const Game = () => {
  const { player, cells, handleClick, winner } = useContext(GameContext);

  return (
    <>
      <div className="container">
        <div className="board">
          {cells.map((value, index) => (
            <div
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="text-white flex items-center justify-center gap-2 text-2xl mt-5">
        {winner ? (
          <>
            <span>Winner</span>
            <span className="text-green-700 text-3xl font-bold">{winner}</span>
          </>
        ) : (
          <>
            <span>Next Player</span>
            <span className="text-green-700 text-3xl font-bold">{player}</span>
          </>
        )}
      </div>
    </>
  );
};

export default Game;
