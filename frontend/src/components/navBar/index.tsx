import React from 'react';
import Icon from '../icon';
import Octopus from '@/assets/images/octopus.png';
import styles from './styles.module.scss';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.logo}>
        <div className={styles.octopusIcon}>
          <img src={Octopus} alt="Octopus" />
        </div>
        <h2>
          <span className="highlight font-bold">GH</span>Finder
        </h2>
      </a>
      <div className={styles.social}>
        <a href="https://github.com/oscru" target="_blank" rel="noreferrer">
          <Icon name="Github" />
        </a>
        <a href="https://oscru.netlify.app" target="_blank" rel="noreferrer">
          <Icon name="Love" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
