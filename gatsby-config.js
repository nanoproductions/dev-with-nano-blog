module.exports = {
  siteMetadata: {
    title: 'Dev with Nano',
    description: '...Learn Code'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts'
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`
  ]
};
