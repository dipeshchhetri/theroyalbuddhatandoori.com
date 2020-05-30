module.exports = {
  siteMetadata: {
    title: `TheRoyalBuddhaTandoori.com`,
    description: `The Royal Buddha Tandoori Moraira website`,
    author: `@sandeshsth`,
    phone: '+34966490830',
    email: 'royalbuddhatandoori@gmail.com'
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
        name: `TheRoyalBuddhaTandoori`,
        short_name: `TheRoyalBuddhaTandoori`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
