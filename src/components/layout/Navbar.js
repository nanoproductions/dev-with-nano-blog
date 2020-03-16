import React from 'react';
import { Link } from 'gatsby';
import { useSiteMeta } from '../../utils/hooks/useSiteMeta';

const Navbar = () => {
  const { title } = useSiteMeta();
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        {title}
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Nav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  // return (
  //   <nav className={styles.root}>
  //     <Link to="/" className={styles.brand}>
  //       {title}
  //     </Link>
  //     <ul>
  //       <li>
  //         <Link to="/" className={styles.link}>
  //           Home
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/about" className={styles.link}>
  //           About
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/contact" className={styles.link}>
  //           Contact
  //         </Link>
  //       </li>
  //     </ul>
  //   </nav>
  // );
};

export default Navbar;
