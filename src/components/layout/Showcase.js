import React from 'react';
import styles from '../css/Showcase.module.scss';
import { Link } from 'gatsby';

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <div className="container">
        <h2>Learn Code with Nano</h2>
        <Link to="/posts">Get Reading</Link>
      </div>
    </div>
  );
};

export default Showcase;
