import React from 'react';
import styles from './styles.module.scss';

const Input = ({ inputValue, setInputValue, setShowContainer }: any) => {
  return (
    <div className={styles.container}>
      <input
        value={inputValue}
        placeholder="Write an org. name to get his repositoryies. Ex: Google"
        onChange={e => setInputValue(e.target.value)}
        onFocus={() => setShowContainer(true)}
      />
      <button>Search</button>
    </div>
  );
};

export default Input;
