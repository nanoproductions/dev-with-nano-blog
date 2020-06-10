import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styles from '../css/BlogPost.module.scss'
import { Helmet } from 'react-helmet'
import Image from 'gatsby-image'

import Layout from "../layout/Layout";
import { Utterences } from "../../utils/Utterances";

export default ({ data }) => {
  const { frontmatter, body } = data.mdx

  console.log(frontmatter)

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
            <Image sizes={frontmatter.cover.childImageSharp.sizes} />
          ) : null}

          <div className={styles.body}>
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
    }
  }
`
