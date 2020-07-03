import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Helmet from 'react-helmet'

const ComingSoon = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { published: { eq: true } } fileAbsolutePath: {regex: "/(coming-soon)/.*\\.md$/"}}  ) {
        nodes {
          body
          id
          frontmatter {
            title
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
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>Coming Soon | Dev with Nano</title>
      </Helmet>
      <Layout>
        <h2 className="text-center mt-1">Coming Soon</h2>
        <div className="post-container container">
          {data.allMdx.nodes.map(({ frontmatter, excerpt, fields, body }) => {
            return (
              <div key={Math.random()} className="post">
                <div className="post-content">
                  {!!frontmatter.cover ? (
                    <Image
                      sizes={frontmatter.cover.childImageSharp.sizes}
                      className="image"
                    />
                  ) : null}
                  <h1>{frontmatter.title}</h1>
                  <p>{excerpt}</p>
                  <MDXRenderer>{body}</MDXRenderer>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default ComingSoon
