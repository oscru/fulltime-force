import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const getInitialFetch = () => {
    const abortController = new AbortController();
    fetch(`${import.meta.env.VITE_API_URL}/github-api/`, {
      signal: abortController.signal,
    })
      .then(res => {
        if (!res.ok) throw Error("Could't fetch the data for the server.");
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => alert(error.name));
  };

  useEffect(() => {
    getInitialFetch();
  }, []);

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
