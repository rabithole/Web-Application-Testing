import React from 'react';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Play Ball!</h1>
      </header>

      <div className='main'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
