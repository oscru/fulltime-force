import React from 'react';
// import SearchResultsProps  from './props';
import Loader from '@/assets/images/loader.svg';
import classNames from 'classnames';
import styles from './styles.module.scss';

const searchResults = ({
  results,
  loadingRepositories,
  inputValue,
  isOpen,
  innerRef,
}: any) => {
  if (loadingRepositories === true) {
    return (
      <div className={styles.loaderContainer}>
        <img src={Loader} alt="loader" />
      </div>
    );
  } else if (!results.length && inputValue !== '') {
    return (
      <div className={styles.loaderContainer} ref={innerRef}>
        <h3>Sorry, we couldn’t any repository.</h3>
      </div>
    );
  } else if (results.length) {
    return (
      <ul
        className={classNames(styles.container, isOpen && styles.show)}
        ref={innerRef}
      >
        (results.length ?
        {results.map((item: any) => (
          <li key={item.id} className={styles.item}>
            {item.name}
          </li>
        ))}
        )
      </ul>
    );
  } else {
    return null;
  }
};

export default searchResults;
