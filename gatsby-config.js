module.exports = {
  siteMetadata: {
    title: 'Dev with Nano',
    description: '...Learn Code',
    siteUrl: 'https://devwithnano.netlify.app',
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
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dev with Nano',
        short_name: 'NanoBlog',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#171542',
        display: 'standalone',
        icon: 'src/img/nano-favicon.png',
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 50,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {frontmatter: {published: {eq: true}}}
                ) {
                    nodes {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: `Dev with Nano Feed`,
          },
        ],
      },
    },
    `gatsby-transformer-json`,
  ],
}
