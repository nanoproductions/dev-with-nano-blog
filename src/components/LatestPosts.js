import { graphql, useStaticQuery, Link } from 'gatsby'
import React, { Fragment } from 'react'
import Image from 'gatsby-image'

import styles from '../components/css/LatestPost.module.scss'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
        limit: 2
      ) {
        nodes {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <h1 className={styles.heading}>My Latest Posts</h1>
      <div className={styles.root}>
        {data.allMdx.nodes.map(({ frontmatter, excerpt, fields }) => {
          return (
            <div key={Math.random()} className={styles.post}>
              {!!frontmatter.cover ? (
                <Image sizes={frontmatter.cover.childImageSharp.sizes} />
              ) : null}
              <h1>
                <Link to={fields.slug} className={styles.link}>
                  {frontmatter.title}
                </Link>
              </h1>
              <small>{frontmatter.date}</small>
              <p>{excerpt}</p>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
