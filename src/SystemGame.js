// App.js

import React, { useState } from 'react';
import './SystemGame.css';

const moves = ['stone', 'paper', 'scissors'];

const SystemGame = () => {
  const [player1Move, setPlayer1Move] = useState(null);
  const [player2Move, setPlayer2Move] = useState(null);
  const [result, setResult] = useState(null);

  const handleMove = (player, move) => {
    if (player === 1) {
      setPlayer1Move(move);
    } else if (player === 2) {
      setPlayer2Move(move);
    }

    // Check result when both players have made a move
    if (player1Move !== null && player2Move !== null) {
      calculateResult();
    }
  };

  const calculateResult = () => {
    if (player1Move === player2Move) {
      setResult("It's a tie!");
    } else if (
      (player1Move === 'stone' && player2Move === 'scissors') ||
      (player1Move === 'paper' && player2Move === 'stone') ||
      (player1Move === 'scissors' && player2Move === 'paper')
    ) {
      setResult('Player 1 wins!');
    } else {
      setResult('Player 2 wins!');
    }
  };

  return (
    <div className="App">
      <h1>2-Player Stone Paper Scissors</h1>
      <div className="moves-container">
        <div>
          <h2>Player 1</h2>
          {moves.map((move) => (
            <button key={move} onClick={() => handleMove(1, move)}>
              {move}
            </button>
          ))}
        </div>
        <div>
          <h2>Player 2</h2>
          {moves.map((move) => (
            <button key={move} onClick={() => handleMove(2, move)}>
              {move}
            </button>
          ))}
        </div>
      </div>
      {result && <p className="result">{result}</p>}
    </div>
  );
};

export default SystemGame;
