import React, { useState, useEffect } from 'react';
import { Hero, CommitsList } from './components';
import '@/assets/styles/App.css';
import commit from '@common/types/commit';

function App() {
  const [initialCommits, setInitialCommits] = useState<commit[]>([]);

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
        setInitialCommits(data);
      })
      .catch(error => alert(error.name));
  };

  useEffect(() => {
    getInitialFetch();
  }, []);

  return (
    <div>
      <Hero />
      <CommitsList commits={initialCommits} />
    </div>
  );
}

export default App;
