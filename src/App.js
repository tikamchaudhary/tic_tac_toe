import React from 'react';
import './App.css';
import Board from './components/board/Board';

const App = () => {
  return (
    <div>
      <h1 style={{
        textAlign: "center",
        background: "gray",
        color: "purple",
        width: "400px",
        margin: "auto",
        marginTop: "10px"
      }}>
        Tic Tac Toe
      </h1>
      <Board />
    </div>
  )
}

export default App;