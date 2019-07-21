import React from 'react';
import './App.css';
import Board from './Board'
function App() {
  document.title = 'Snake Game Designed by Jason W';
  alert("Instructions: \n \
  1. Use arrows or WSAD to control the snake. \n \
  2. Use \"[\" and \"]\" to reduce or increase the speed of motion before the game starts. \n \
  3. Use \"r\" to restart the game. \n \
  4. Use space to pause the game. \n \
  5. You have 3 lives to start, and may earn more lives if you catch the pink food. \nLet's GO!")
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
