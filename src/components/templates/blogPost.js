import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styles from '../css/BlogPost.module.scss';
import { Helmet } from 'react-helmet';

import Layout from '../layout/Layout';

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div className="container">
        <div className={styles.post}>
          <div className={styles.heading}>
            <small className={styles.date}>{frontmatter.date}</small>
            <h2 className={styles.title}>{frontmatter.title}</h2>
          </div>

          <div className={styles.body}>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
