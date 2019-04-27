const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);


  const pageQuery = `
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
          }
        }
      }
    }
  `

  const postQuery = `
    {
      allWordpressPost{
        edges {
          node{
            id
            slug
            status
            template
            format
          }
        }
      }
    }
  `

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;


  return new Promise((resolve, reject) => {
    graphql(pageQuery)

    //   .then(result => {
    //     if(result.errors) {
    //       console.log(result.errors);
    //       reject(result.errors);
    //     }

    //     const pageTemplate = path.resolve("./src/templates/page.js");
    //     const pagesTemplate = path.resolve("./src/templates/pages.js");

    //     createPage({
    //         path: `pages/`,
    //         component: slash(pageTemplate)
    //     });

    //     _.each(result.data.allWordpressPage.edges, edge => {
    //         createPage({
    //             path: `/${edge.node.slug}/`,
    //             component: slash(pageTemplate),
    //             context: {
    //                 id: edge.node.id,
    //             },
    //         });
    //     });
        
    //   })

      .then(() => {
        graphql(postQuery)
        .then(result => {

          if(result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          const postTemplate = path.resolve("./src/templates/post.js");
          const postsTemplate = path.resolve("./src/templates/posts.js");

          createPage({
              path: `posts/`,
              component: slash(postsTemplate)
          });

          

          _.each(result.data.allWordpressPost.edges, edge => {
              createPage({
                  path: `/post/${edge.node.slug}/`,
                  component: slash(postTemplate),
                  context: {
                      id: edge.node.id,
                  },
              });
          });
          resolve();
          

        });

      });

  });

};

