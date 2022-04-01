const metadata = {
  title: `Gatsby Blog Starter`,
  description: `Gatsby default starter modified to include a very basic blog option`,
  author: `Marcy Barnett <marcy@marcybarnett.com>`,
  name: `gatsby-blog-starter`,
  short_name: `starter`,
  start_url: `/`,
  background_color: `#663399`,
  theme_color: `#663399`,
  display: `minimal-ui`,
  icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
};

/* eslint-disable no-undef */
module.exports = {
  siteMetadata: metadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: metadata,
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        extensions: ['js', 'jsx'],
        // exclude: /(node_modules|.cache|public)/,
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
        emitWarning: true,
        failOnError: false
      }
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
