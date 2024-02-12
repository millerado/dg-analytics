import Ratings from '../components/Ratings';

function Tournaments({ playerInfo, year }) {
  const loading = () => {
    return <h2>Loading...</h2>;
  };

  const loaded = () => {
    return (
      <div className='Tournaments'>
        <h2>{year} Tournaments</h2>
        <ul>
          {playerInfo.tournaments.map((tournament) => (
            <li key={tournament.href}>
              <a href={`pdga.com${tournament.href}`}>{tournament.name}</a>
              <Ratings tournament={tournament} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return playerInfo.tournaments.length > 0 ? loaded() : loading();
}

export default Tournaments;
