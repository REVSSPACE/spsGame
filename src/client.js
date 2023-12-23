// client/src/App.js

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Adjust the URL based on your server configuration

const Client = () => {
  const [playerMove, setPlayerMove] = useState(null);
  const [opponentMove, setOpponentMove] = useState(null);
  const [result, setResult] = useState(null);

  const handleMove = (move) => {
    setPlayerMove(move);
    socket.emit('move', move);
  };

  useEffect(() => {
    socket.on('move', (opponentMove) => {
      setOpponentMove(opponentMove);
    });
  }, []);

  useEffect(() => {
    if (playerMove && opponentMove) {
      calculateResult();
    }
  }, [playerMove, opponentMove]);

  const calculateResult = () => {
    // Add your game logic here
    if (playerMove === opponentMove) {
      setResult("It's a tie!");
    } else if (
      (playerMove === 'stone' && opponentMove === 'scissors') ||
      (playerMove === 'paper' && opponentMove === 'stone') ||
      (playerMove === 'scissors' && opponentMove === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <div>
      <h1>Multiplayer Stone Paper Scissors</h1>
      <div className="moves-container">
        <button onClick={() => handleMove('stone')}>Stone</button>
        <button onClick={() => handleMove('paper')}>Paper</button>
        <button onClick={() => handleMove('scissors')}>Scissors</button>
      </div>
      {playerMove && <p>Your move: {playerMove}</p>}
      {opponentMove && <p>Opponent's move: {opponentMove}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default Client;
