import React from 'react';
import './App.css';

function Display(props) {
  return (
    <div className="display">
        <h1>Display</h1>
        <h2>Balls</h2>
          <div className='stats'>{props.balls}</div>
        <h2>Strikes</h2>
          <div className='stats'>{props.strikes}</div>
        <h2>Fouls</h2>
          <div className='stats'>fouls</div>
        <h2>Hits</h2>
          <div className='stats'>hits</div>
    </div>
  );
}

export default Display;
