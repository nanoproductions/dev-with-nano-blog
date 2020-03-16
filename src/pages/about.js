import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About | Dev with Nano</title>
      </Helmet>
      <div className="container" style={{ lineHeight: '1.5' }}>
        <h1>About</h1>
        <p>
          Nano is a Full Stack Developer for over 1 year with great interest in
          React. Nano attempts to get in the habit of writing multiple times a
          week to ensure that his knowledge and his tips are expressed to others
          that might need them.
        </p>
        <p>
          Check out my other blogs:
          <ul style={{ marginLeft: '2rem' }}>
            <li>https://devwithnano.home.blog</li>
            <li>https://nanowrite.art.blog</li>
          </ul>
        </p>
        <p>
          And if you would like a specific post, please feel free to email me
          at: nanoproductions2@gmail.com
        </p>
      </div>
    </Layout>
  );
};

export default About;
