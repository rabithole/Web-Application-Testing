import React, { useState } from 'react';
import Display from './Display';
import './App.css';

function Dashboard() {
  const [ball, increaseBall] = useState(0);
  const [strike, increaseStrike] = useState(0);
  const [foul, increaseFoul] = useState(0);
  const [hit, increaseHit] = useState(0);

  const addBall = () => {
    ball === 4 ? increaseBall(0) : increaseBall(ball + 1);
    ball === 4 ? increaseStrike(0) : increaseBall(ball + 1);
  }

  const addStrike = (hit) => {
    strike === 2 ? increaseStrike(0) : increaseStrike(0);
    strike > 1 ? increaseBall(0) : increaseStrike(strike + 1);
  }

  const addFouls = () => {
    // console.log('fouls');
    foul === 4 ? increaseFoul(0) : increaseFoul(foul + 1);
    foul > -1 ? increaseStrike(strike + 1) : increaseFoul(foul + 1);
    strike === 2 ? increaseStrike()
  }

  const addHits = () => {
    console.log('hits');
    hit ? increaseHit(hit + 1) : increaseHit(hit + 1);
    hit > -1 ? increaseBall(0) : increaseHit(hit + 1);
    hit + 1 ? increaseStrike(0) : increaseHit(hit + 1);
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
            fouls={foul}
            hits={hit}
          />
        </div>
    </div>
  );
}

export default Dashboard;
