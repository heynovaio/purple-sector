module.exports = {
  siteMetadata: {
    title: `Purple Sector Strategy`,
    titleTemplate: `%s`,
    description: `Creating the conditions to capture knowledge, shape plans, and activate people around what matters most to your business through facilitated sessions.`,
    siteUrl: `https://purplesector.ca`,
    image: '/static/meta-image.jpg',
    twitterUsername: `@purplesector_ca`,
  },
  plugins: [
   {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/purple-cutout.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:300,400,400i,700,800`,
          'Ubuntu\:300,400,400i,700,800'        
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
