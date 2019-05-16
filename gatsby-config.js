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
      resolve: `gatsby-source-wordpress`,
      options: {
<<<<<<< HEAD
        baseUrl: "themesgrove.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
=======
        baseUrl: `themesgrove.com`,
        auth: {},
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
>>>>>>> fc72ea2a481938754489d14129cb8e0e8978f6f0
        perPage: 100,
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/categories",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/wp-api-menus/v2/menus",
        ],
<<<<<<< HEAD
        // excludedRoutes: [
        //   "**/acf/**",
        //   "**/wc/**",
        //   "**/oembed/**",
        //   "**/akismet/**",
        //   "**/rankmath/**",
        //   "**/wp-analytify/**",
        //   "**/affwp/**",
        //   "**/wp-content/uploads/edd/",
        // ],
=======
        excludedRoutes: [
          "**/wp-content/uploads/edd/**",
          "**/**/*.zip",
        ],
        verboseOutput: true,
>>>>>>> fc72ea2a481938754489d14129cb8e0e8978f6f0
        // use a custom normalizer which is applied after the built-in ones.
        // normalizer: function({ entities }) {
        //   return entities
        // },
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
