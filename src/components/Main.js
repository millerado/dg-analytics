import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Player from '../pages/Player';
import InputPlayerNumber from './InputPlayerNumber';

function Main(props) {
  const [playerID, setPlayerID] = useState('');
  const [tournamentsPlayed, setTournamentsPlayed] = useState([]);

  const getTournamentsPlayed = (playerID) => {
    try {
      fetch(`http://localhost:4000/player/${playerID}`)
        .then((res) => res.json())
        .then((data) => setTournamentsPlayed(data));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getTournamentsPlayed(playerID);
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
            <Player playerID={playerID} tournamentsPlayed={tournamentsPlayed} />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
//this component will make a fetch request to the backend
//the backend will use axios and cheeiro to scrape the PDGA website
//the backend will return the data to the frontend
//the frontend will display the data
//the data will be a list of tournaments played by the player
//each tournament will have a link to the tournament page
