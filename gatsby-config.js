module.exports = {
  siteMetadata: {
    title: `New Hope`,
    description: `A church based out of Mannford Oklahoma`,
    author: `@Tankcaster`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `New Hope Mannford`,
        short_name: `New Hope`,
        start_url: `/`,
        background_color: `#f7d865`,
        theme_color: `#f7d865`,
        display: `minimal-ui`,
        icon: `src/images/newHope.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`events`],
      },
    },
  ],
}
