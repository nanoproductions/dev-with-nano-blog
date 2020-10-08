import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styles from '../css/BlogPost.module.scss'
import { Helmet } from 'react-helmet'
import Image from 'gatsby-image'

import Layout from '../layout/Layout'

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx

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

          {!!frontmatter.cover ? (
            <Image fluid={frontmatter.cover.childImageSharp.sizes} />
          ) : null}

          <div className={styles.body}>
            <p>
              {data.mdx.fields.readingTime.text} |{' '}
              {data.mdx.fields.readingTime.words} words
            </p>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
        readingTime {
          text
          words
        }
      }
    }
  }
`
