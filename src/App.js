import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Nothing yet...');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World</h1>
        <h2>{message}</h2>
      </header>
    </div>
  );
}

export default App;
