import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
          }
        }
      }
    }
  `);
  return (
    <div>
      {data.allMdx.nodes.map(({ frontmatter, excerpt }) => {
        return (
          <Fragment>
            <h1>{frontmatter.title}</h1>
            <small>{Date(frontmatter.date).toString()}</small>
            <p>{excerpt}</p>
          </Fragment>
        );
      })}
    </div>
  );
};
