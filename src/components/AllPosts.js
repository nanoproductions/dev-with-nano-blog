import { graphql, useStaticQuery, Link } from "gatsby";
import React, { Fragment } from "react";

import styles from "../components/css/LatestPost.module.scss";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  return (
    <Fragment>
      <h1 className={styles.heading}>All My Posts</h1>
      <div className={styles.root}>
        {data.allMdx.nodes.map(({ frontmatter, excerpt, fields, id }) => {
          return (
            <div key={id} className={styles.post}>
              <h1>
                <Link to={fields.slug} className={styles.link}>
                  {frontmatter.title}
                </Link>
              </h1>
              <small>{frontmatter.date}</small>
              <p>{excerpt}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
