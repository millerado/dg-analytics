import Years from '../components/Years';
import Tournaments from '../components/Tournaments';

function Player({ playerID, playerInfo, setPlayerInfo, year, setYear }) {
  const loading = () => {
    return <h2>Loading...</h2>;
  };

  const loaded = () => {
    return (
      <div className='PlayerInfo'>
        <h1>Player: {playerID}</h1>
        <Years
          playerID={playerID}
          playerInfo={playerInfo}
          setYear={setYear}
          setPlayerInfo={setPlayerInfo}
        />
        <Tournaments playerInfo={playerInfo} year={year} />
      </div>
    );
  };

  return playerInfo.years.length > 0 ? loaded() : loading();
}

export default Player;
