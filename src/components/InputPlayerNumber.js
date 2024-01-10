import { useState } from 'react';
import { useNavigate } from 'react-router';

// make a componet called InputPlayerNumber which creates a form with a text input
function InputPlayerNumber() {
  const [playerNumber, setPlayerNumber] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPlayerNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/player/${playerNumber}`);
  };

  return (
    <div className='InputPlayerNumber'>
      <form>
        <label>
          Player Number:
          <input type='text' name='playerNumber' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default InputPlayerNumber;
