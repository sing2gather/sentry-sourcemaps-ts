import React from 'react';
import logo from './logo.svg';
import './App.css';

function throwAnErrorInTypescript() {
  throw new Error('This is an Error in TypeScript !');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={() => throwAnErrorInTypescript()}>Throw an Error in TypeScript</button>
      </header>
    </div>
  );
}

export default App;
