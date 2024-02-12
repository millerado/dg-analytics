function Ratings({ tournament }) {
  function averageRating(ratings) {
    let total = 0;
    let count = 0;
    for (let round of ratings) {
      if (round.length >= 3) {
        total += parseInt(round);
        count++;
      }
    }
    return count > 0 ? Math.round(total / count) : 'N/A';
  }

  return (
    <div>
      <br />
      <div>Average: {averageRating(tournament.ratings)}</div>
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
