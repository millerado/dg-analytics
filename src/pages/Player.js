function Player({ playerID, tournaments, years }) {
  return (
    <div>
      <h1>Player: {playerID}</h1>
      <h2>Years</h2>
      <ul>
        {years.map((year) => (
          <li key={year}>
            <a href={`http://localhost:4000/player/${playerID}/stats/${year}`}>
              {year}
            </a>
          </li>
        ))}
      </ul>
      <h2>Tournaments</h2>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            <a href={tournament.link}>{tournament.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Player;
