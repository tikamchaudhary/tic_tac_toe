import React from 'react';
import './App.css';
import Board from './components/board/Board';

const App = () => {
  return (
    <div>
      <h1 className='title'> Tic Tac Toe </h1>
      <Board />
    </div>
  )
}

export default App;