import React from 'react';
import { Link } from 'gatsby';
import { useSiteMeta } from '../../utils/hooks/useSiteMeta';
import styles from '../css/Navbar.module.scss';

const Navbar = () => {
  const { title } = useSiteMeta();
  return (
    <nav className={styles.root}>
      <Link to="/" className={styles.brand}>
        {title}
      </Link>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
