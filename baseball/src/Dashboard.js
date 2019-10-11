import React, { useState } from 'react';
import Display from './Display';
import './App.css';

function Dashboard() {
  const [ball, increaseBall] = useState(0);
  const [strike, increaseStrike] = useState(0);

  const addBall = () => {
    ball === 4 ? increaseBall(0) : increaseBall(ball + 1);
  }

  const addStrike = () => {
    console.log('strikes');

    strike === 3 ? increaseStrike(0) : increaseStrike(strike + 1)
  }

  const addFouls = () => {
    console.log('fouls');
  }

  const addHits = () => {
    console.log('hits');
  }
  return (
    <div>
        <div  className="dashboard">
          <h1>Dashboard</h1>

          <button onClick={ addBall }>Balls</button>
          <button onClick={ addStrike }>Strikes</button>
          <button onClick={ addFouls }>Fouls</button>
          <button onClick={ addHits }>Hit</button>
        </div>

        <div>
          <Display
            balls={ball}
            strikes={strike}
          />
        </div>
    </div>
  );
}

export default Dashboard;
