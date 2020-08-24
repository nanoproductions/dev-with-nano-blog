import React, { Fragment } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"} }
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
              readingTime {
                text

              }
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <div className="container post-container">
        {data.allMdx.nodes.map(({ frontmatter, excerpt, fields }) => {
          return (
            <div key={Math.random()} className="post">
              {!!frontmatter.cover ? (
                <Image
                  sizes={frontmatter.cover.childImageSharp.sizes}
                  className="image"
                />
              ) : null}
              <div className="post-content">
                <h1>
                  <AniLink
                    paintDrip
                    to={fields.slug}
                    hex="#5952ff"
                    className="link"
                  >
                    {frontmatter.title}
                  </AniLink>
                </h1>
                <p>{fields.readingTime.text}</p>
                <small>{frontmatter.date}</small>
                <p>{excerpt}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
