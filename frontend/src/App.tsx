import React, { useState, useEffect } from 'react';
import { Hero, CommitsList, NavBar, Footer } from './components';
import commit from '@common/types/commit';
import '@/assets/styles/App.css';

function App() {
  const [initialCommits, setInitialCommits] = useState<commit[]>([]);
  const [repositories, setRepositories] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedCommit, setSelectedCommit] = useState<commit | undefined>();
  const [loadingRepositories, setLoadingRepositories] =
    useState<boolean>(false);

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

  const handleFetchRepository = () => {
    setLoadingRepositories(true);
    const abortController = new AbortController();
    fetch(
      `${import.meta.env.VITE_API_URL}/github-api/get-repository/${inputValue}`,
      {
        signal: abortController.signal,
      },
    )
      .then(res => {
        if (!res.ok) {
          setLoadingRepositories(false);
          throw Error("Could't fetch the data for the server.");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setRepositories(data);
        setLoadingRepositories(false);
      })
      .catch(error => console.log(error));
  };

  const handleShowCommitMessage = () => {
    console.log(selectedCommit);
  };

  useEffect(() => {
    handleShowCommitMessage();
  }, [selectedCommit]);

  useEffect(() => {
    getInitialFetch();
  }, []);

  useEffect(() => {
    if (inputValue.length > 3) handleFetchRepository();
    if (inputValue === '') {
      setRepositories([]);
      setLoadingRepositories(false);
    }
  }, [inputValue]);

  return (
    <div>
      <NavBar />
      <Hero
        inputValue={inputValue}
        setInputValue={setInputValue}
        repositories={repositories}
        loadingRepositories={loadingRepositories}
      />
      <CommitsList
        commits={initialCommits}
        setSelectedCommit={setSelectedCommit}
      />
      <Footer />
    </div>
  );
}

export default App;
