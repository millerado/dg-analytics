import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Player from '../pages/Player';
import InputPlayerNumber from './InputPlayerNumber';

function Main(props) {
  const [playerID, setPlayerID] = useState('');
  const [playerInfo, setPlayerInfo] = useState({ tournaments: [], years: [] });

  const getPlayerInfo = (playerID) => {
    try {
      fetch(`http://localhost:4000/player/${playerID}`)
        .then((res) => res.json())
        .then((data) =>
          setPlayerInfo({
            ...playerInfo,
            ['tournaments']: data.tournaments,
            ['years']: data.years,
          })
        );
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getPlayerInfo(playerID);
  }, [playerID]);

  return (
    <div className='Main'>
      <div className='InputPlayerNumber'>
        <InputPlayerNumber setPlayerID={setPlayerID} playerID={playerID} />
      </div>
      <Routes>
        <Route
          path='/player/:id'
          element={
            <Player
              playerID={playerID}
              tournaments={playerInfo['tournaments']}
              years={playerInfo['years']}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
