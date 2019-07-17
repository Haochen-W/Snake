import React from 'react';
import './App.css';
import Board from './Board'
function App() {
  document.title = 'Snake Game Designed by Jason W';
  alert("Instructions: \n \
  1. Use arrows or WSAD to control the snake. \n \
  2. Use \"[\" and \"]\" to reduce or increase the speed of motion before the game starts. \n \
  3. Use \"r\" to restart the game. \n \
  4. Use space to pause the game. \nLet's GO!")
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
