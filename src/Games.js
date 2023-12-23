// Game.js

import React, { useState } from 'react';
import './Game.css';

const choices = ['stone', 'paper', 'scissors'];

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    const computerChoice = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    calculateResult(choice, computerChoice);
  };

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const calculateResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === 'stone' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'stone') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <div id="gamemain">
     
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
