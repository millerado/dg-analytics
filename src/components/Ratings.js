function Ratings({ tournament }) {
  return (
    <div>
      <br />
      <ul>
        {tournament.ratings.map((round, idx) =>
          round.length >= 3 ? (
            <li key={tournament.href + idx}>{round}</li>
          ) : null
        )}
      </ul>
      <br />
    </div>
  );
}

export default Ratings;
