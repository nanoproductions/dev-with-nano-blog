import React, { Fragment } from 'react';
import '../css/Global.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
