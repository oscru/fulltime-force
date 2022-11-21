import React, { useState, useEffect } from 'react';
import { Hero, CommitsList, NavBar, Footer } from './components';
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
        console.log(data);
        setInitialCommits(data);
      })
      .catch(error => alert(error.name));
  };

  useEffect(() => {
    getInitialFetch();
  }, []);

  return (
    <div>
      <NavBar />
      <Hero />
      <CommitsList commits={initialCommits} />
      <Footer />
    </div>
  );
}

export default App;
