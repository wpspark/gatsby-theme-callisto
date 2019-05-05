module.exports = {
  siteMetadata: {
    title: `ThemesGrove`,
    description: `ThemesGrove specializes in WordPress creates awesome themes and plugins. Choose the perfect WordPress Themes and Plugins from our vast collection.`,
    author: `@themexpert`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, 
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }, 
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "themesgrove.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        perPage: 100,
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/categories",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "/wp-api-menus/**",
        ],
        excludedRoutes: [
          "**/acf/**",
          "**/oembed/**",
          "**/akismet/**",
          "**/rankmath/**",
          "**/wp-analytify/**",
          "**/affwp/**",
          "**/wp-content/uploads/**",
        ],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
