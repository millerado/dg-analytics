function Player({ playerID, tournaments, year }) {
  return (
    <div>
      <h2>{year} Tournaments</h2>
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
