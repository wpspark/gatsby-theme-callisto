const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

const postQuery = `
{
  wordpressSiteMetadata{
    name
    description
    url
    home
  }
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
        author {
          id
          name
          slug
          avatar_urls{
            wordpress_96
          }
        }
        featured_media{
          localFile{
              childImageSharp{
                  original {
                      width
                      height
                      src
                  }
              }
          }
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
        pageTemplate: slash(postsTemplate),
        pageLength: 4,
        pathPrefix: '/',
        // pathPrefix: 'your_page_name',
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
        context: {
          wordpressSiteMetadata: result.data.wordpressSiteMetadata
        },
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
                id: edge.node.id,
                wordpressSiteMetadata: result.data.wordpressSiteMetadata
              },
          });
      });
      resolve();

    });
  });
}

