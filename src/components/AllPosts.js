import React, { Fragment } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import Dump from './Dump'

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
                <Link to={fields.slug}>
                  <Image
                    fluid={frontmatter.cover.childImageSharp.sizes}
                    className="image"
                  />
                </Link>
              ) : null}
              <div className="post-content">
                <h1>
                  <Link to={fields.slug} className="link">
                    {frontmatter.title}
                  </Link>
                </h1>
                <p>{fields.readingTime.text}</p>
                <small>{frontmatter.date}</small>
                <p>{excerpt} <Link to={fields.slug} className="link-read-more">Read More...</Link></p>
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
