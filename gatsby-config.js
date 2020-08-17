module.exports = {
  siteMetadata: {
    title: 'Dev with Nano',
    description: '...Learn Code',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            },
          },
        ],
      },
      plugin: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 540,
          },
        },
      ],
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'contents',
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING,
        head: true,
      },
    },
    `gatsby-remark-reading-time`,
  ],
}
