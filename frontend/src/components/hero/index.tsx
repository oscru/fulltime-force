import React, { useRef } from 'react';
import useClickOutSide from '@/hooks/useClickOutSide';
import styles from './styles.module.scss';
import Input from '../input';
import SearchResults from '../searchResults';

const Hero = ({
  inputValue,
  setInputValue,
  repositories,
  loadingRepositories,
}: any) => {
  const wrapperRef = useRef(null);
  const { showContainer, setShowContainer } = useClickOutSide(wrapperRef);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Find <span className="highlight">commits </span>from your favorite{' '}
          <span className="highlight">github repositories</span>.
        </h1>
        <div className={styles.inputContainer}>
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            setShowContainer={setShowContainer}
          />
          <SearchResults
            results={repositories}
            loadingRepositories={loadingRepositories}
            inputValue={inputValue}
            isOpen={showContainer}
            innerRef={wrapperRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
