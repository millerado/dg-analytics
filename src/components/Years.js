import { Link } from 'react-router-dom';

function Years({ playerID, playerInfo, setYear, setPlayerInfo }) {
  const handleClick = (year) => {
    setYear(year);
    setPlayerInfo({
      ...playerInfo,
      tournaments: [],
    });
  };

  return (
    <div className='Years'>
      <h2>Years</h2>
      <ul>
        {playerInfo.years.map((year) => (
          <li key={year}>
            <Link
              to={`http://localhost:3000/player/${playerID}/stats/${year}`}
              onClick={() => handleClick(year)}
            >
              {year}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Years;
