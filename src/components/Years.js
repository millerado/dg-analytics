import { Link } from 'react-router-dom';

function Years({ playerID, years, setYear }) {
  return (
    <div>
      <h2>Years</h2>
      <ul>
        {years.map((year) => (
          <li key={year}>
            <Link
              to={`http://localhost:3000/player/${playerID}/stats/${year}`}
              onClick={() => setYear(year)}
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
