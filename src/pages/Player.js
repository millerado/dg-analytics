import Ratings from '../components/Ratings';

function Player({ playerID, tournaments, year }) {
  return (
    <div>
      <h2>{year} Tournaments</h2>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.href}>
            <a href={`pdga.com${tournament.href}`}>{tournament.name}</a>
            <Ratings tournament={tournament} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Player;
