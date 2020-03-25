module.exports = {
  siteMetadata: {
    title: `We are Code Heroes`,
    description: `A team of six passionate developers, who just love their work. Our contract was suddenly terminated because of turbulent markets in March 2020. So we decided to pursue our dream and start looking for new challenges together. We believe that we are highly effective team with senior skills and diverse abilites.`,
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
        theme_color: `#FC732C`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
