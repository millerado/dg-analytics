import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Player from '../pages/Player';
import InputPlayerNumber from './InputPlayerNumber';
import Years from './Years';

function Main(props) {
  const [playerID, setPlayerID] = useState('');
  const [playerInfo, setPlayerInfo] = useState({ tournaments: [], years: [] });
  const [year, setYear] = useState('2023');

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

  const getTournamentsByYear = (playerID, year) => {
    try {
      fetch(`http://localhost:4000/player/${playerID}/stats/${year}`)
        .then((res) => res.json())
        .then((data) =>
          setPlayerInfo({
            ...playerInfo,
            ['tournaments']: data,
          })
        );
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getPlayerInfo(playerID);
    getTournamentsByYear(playerID, year);
  }, [playerID, year]);

  return (
    <div className='Main'>
      <div className='InputPlayerNumber'>
        <InputPlayerNumber setPlayerID={setPlayerID} playerID={playerID} />
      </div>
      <h1>Player: {playerID}</h1>
      <div className='Years'>
        <Years
          playerID={playerID}
          years={playerInfo['years']}
          setYear={setYear}
        />
      </div>
      <Routes>
        <Route
          path='/player/:id'
          element={
            <Player
              playerID={playerID}
              tournaments={playerInfo['tournaments']}
              year={year}
            />
          }
        />
        <Route
          path='/player/:id/stats/:year'
          element={
            <Player
              playerID={playerID}
              tournaments={playerInfo['tournaments']}
              year={year}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
