import React from 'react';
import './App.css';
import Board from './Board'
function App() {
  document.title = 'Snake Game Designed by Jason W';
  alert("   Use arrows to control the snake. \n \
  Use \"[\" and \"]\" to reduce or increase the speed of motion before the game starts. \n \
  Use \"r\" to restart the game. \n \
  Let's GO!")
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
