const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

const postQuery = `
{
  allWordpressPost(
    sort: {
      fields: [date]
      order: DESC
    }
  ){
    edges {
      node{
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
        categories{
            id
            name
            slug
            link
        }
      }
    }
  }
}`

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(postQuery)
    .then(result => {

      if(result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      const postTemplate = path.resolve("./src/templates/post.js");
      const postsTemplate = path.resolve("./src/templates/blog.js");

    
      createPaginatedPages({
        edges: result.data.allWordpressPost.edges,
        createPage: createPage,
        pageTemplate: './src/templates/blog.js',
        pageLength: 12,
        pathPrefix: '/',
      });

      // createPaginatedPages({
      //   edges: result.data.allWordpressPost.edges,
      //   createPage: createPage,
      //   pageTemplate: './src/templates/index.js',
      //   pageLength: 50,
      //   pathPrefix: '',
      //   context:{}
      // });

      _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                  id: edge.node.id
              },
          });
      });
      resolve();

    });
  });
}

