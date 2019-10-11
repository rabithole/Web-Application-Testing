import React from 'react';
import Dashboard from './Dashboard';
import Display from './Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Play Ball!</h1>
      </header>

      <div className='main'>
        <Dashboard />
        <Display />
      </div>
    </div>
  );
}

export default App;
