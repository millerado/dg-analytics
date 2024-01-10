function Player({ playerID, tournamentsPlayed }) {
  return (
    <div>
      <h1>Player: {playerID}</h1>
      <h2>Tournaments</h2>
      <ul>
        {tournamentsPlayed.map((tournament) => (
          <li key={tournament.id}>
            <a href={tournament.link}>{tournament.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Player;
