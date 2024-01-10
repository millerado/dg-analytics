import { useState } from 'react';
import { useNavigate } from 'react-router';

// make a componet called InputPlayerNumber which creates a form with a text input
function InputPlayerNumber({ setPlayerID, playerID }) {
  const [playerNumber, setPlayerNumber] = useState(`${playerID}`);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPlayerNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerID(playerNumber);
    navigate(`/player/${playerNumber}`);
  };

  return (
    <div className='InputPlayerNumber'>
      <form onSubmit={handleSubmit}>
        <label>
          Player Number:
          <input
            type='text'
            name='playerNumber'
            value={playerNumber}
            onChange={handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default InputPlayerNumber;
