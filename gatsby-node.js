const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    './src/components/templates/blogPost.js'
  )

  const tagTemplate = path.resolve('./src/components/templates/tagTemplate.js')

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes

    const tags = result.data.tagsGroup.group
    console.log('TAG' + tags)

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
