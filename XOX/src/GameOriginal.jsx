import React, { useReducer } from 'react';
import { createContext, useEffect } from 'react';

export const GameContext = createContext();

const initialState = {
  player: 'X',
  cells: Array(9).fill(null),
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  winner: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_MAKE':
      const newCells = [...state.cells];
      newCells[action.index] = state.player;

      if (state.cells[action.index] || state.winner) {
        return state;
      }

      let winner = null;
      state.winningCombinations.forEach((combination) => {
        if (
          newCells[combination[0]] !== null &&
          newCells[combination[0]] === newCells[combination[1]] &&
          newCells[combination[1]] === newCells[combination[2]]
        ) {
          winner = newCells[combination[0]];
        }
      });

      return {
        ...state,
        cells: newCells,
        player: state.player === 'X' ? 'O' : 'X',
        winner: winner,
      };

    default:
      return state;
  }
};

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const gameContext = {
    player: state.player,
    cells: state.cells,
    winningCombinations: state.winningCombinations,
    handleClick: (index) => {
      dispatch({ type: 'MOVE_MAKE', index });
    },
    winner: state.winner,
  };

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
};

export default GameProvider;
