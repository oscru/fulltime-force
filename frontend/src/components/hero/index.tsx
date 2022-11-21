import React from 'react';
import styles from './styles.module.scss';
import Input from '../input';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Find <span className="highlight">commits </span>from your favorite{' '}
          <span className="highlight">github repositories</span>.
        </h1>
        <Input />
      </div>
    </div>
  );
};

export default Hero;
