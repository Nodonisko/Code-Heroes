module.exports = {
  siteMetadata: {
    title: `We are Code Heroes`,
    description: `A team of Javascript developers with web & mobile in our DNA. Hire us and we will transform your ideas into reality.`,
    author: `@code_heroes`,
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
        name: `code-heroes`,
        short_name: `code-heroes`,
        start_url: `/`,
        background_color: `#2B3D87`,
        theme_color: `#FF5C46`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1746429,
        sv: 6,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
