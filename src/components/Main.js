import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Player from '../pages/Player';
import InputPlayerNumber from './InputPlayerNumber';

function Main(props) {
  const [playerID, setPlayerID] = useState('');
  const [playerInfo, setPlayerInfo] = useState({ tournaments: [], years: [] });
  const [year, setYear] = useState('2023');

  const getPlayerInfo = (playerID, year) => {
    try {
      fetch(`http://localhost:4000/player/${playerID}/stats/${year}`)
        .then((res) => res.json())
        .then((data) =>
          setPlayerInfo({
            ...playerInfo,
            tournaments: data.tournaments,
            years: data.years,
          })
        );
      setYear(year);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlayerInfo(playerID, year);
  }, [playerID, year]);

  return (
    <div className='Main'>
      <div className='InputPlayerNumber'>
        <InputPlayerNumber
          setPlayerID={setPlayerID}
          playerID={playerID}
          setPlayerInfo={setPlayerInfo}
        />
      </div>
      <Routes>
        <Route
          path='/player/:id'
          element={
            <Player
              playerID={playerID}
              playerInfo={playerInfo}
              setPlayerInfo={setPlayerInfo}
              year={year}
              setYear={setYear}
            />
          }
        />
        <Route
          path='/player/:id/stats/:year'
          element={
            <Player
              playerID={playerID}
              playerInfo={playerInfo}
              setPlayerInfo={setPlayerInfo}
              year={year}
              setYear={setYear}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
