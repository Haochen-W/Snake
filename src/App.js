import React from 'react';
import './App.css';
import Board from './Board'
function App() {
  document.title = 'Snake Game Designed by Jason W';
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
