import React, { Fragment } from 'react';
import '../css/Global.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import PostState from '../../context/Posts/PostState';

const Layout = props => {
  return (
    <PostState>
      <Fragment>
        <Navbar />
        {props.children}
        <Footer />
      </Fragment>
    </PostState>
  );
};

export default Layout;
