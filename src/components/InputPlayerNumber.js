// make a componet called InputPlayerNumber which creates a form with a text input
function InputPlayerNumber() {
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