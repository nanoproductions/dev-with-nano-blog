const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    './src/components/templates/blogPost.js'
  )

  try {
    // Get Posts
    const rawPosts = await graphql(`
    {
      allMdx(filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    `)
    const posts = rawPosts.data.allMdx.nodes

    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: { slug: post.fields.slug },
      })
    })

    // Get Courses
    const rawCourses = await graphql(`
    {
      allMdx(filter: {fileAbsolutePath: {regex: "/(courses)/.*\\.md$/"}}) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    `)
  } catch (error) {
    throw error
  }

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes

    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: { slug: post.fields.slug },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    console.log('Value: ' + value)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
