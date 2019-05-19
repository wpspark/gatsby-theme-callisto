const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

const categoryQuery = `
{
  allWordpressCategory{
    edges{
      node{
        id
        wordpress_id
        slug
        name
        count
      }
    }
  }
}`

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(categoryQuery)
    .then(result => {

      if(result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      const categoryTemplate = path.resolve("./src/templates/category.js");
      const categoriesTemplate = path.resolve("./src/templates/categoriesarchive.js");
      
      // createPage({
      //     path: `categories/`,
      //     component: slash(categoriesTemplate)
      // });

      createPaginatedPages({
        edges: result.data.allWordpressCategory.edges,
        createPage: createPage,
        pageTemplate: slash(categoriesTemplate),
        pageLength: 3,
        pathPrefix: '/categories/',
        // pathPrefix: 'your_page_name',
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
        context: {},
      });

      _.each(result.data.allWordpressCategory.edges, edge => {
          createPage({
              path: `/categories/${edge.node.slug}/`,
              component: slash(categoryTemplate),
              context: edge.node,
          });
      });
      resolve();

    });
  });
}

