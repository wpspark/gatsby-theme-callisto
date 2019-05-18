const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
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
    }
  `
  const { createPage } = actions
  const allPosts = []
  const blogPages = []
  let pageNumber = 0
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.postId)
      const blogTemplate = path.resolve(`./src/pages/blog.js`)
      const blogPagePath = !variables.after ? `/` : `/page/${pageNumber}`

      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
        },
        ids: nodeIds,
      }
      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: 12, after: endCursor })
      }
      return allPosts
    })

  await fetchPosts({ first: 12, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/pages/post.js`)

    blogPages.map(blogPage => {
      console.log(`createBlogPage ${blogPage.context.pageNumber}`)
      createPage(blogPage)
    })

    allPosts.map(post => {
      console.log(`create post: ${post.uri}`)
      createPage({
        path: `/blog/${post.uri}/`,
        component: postTemplate,
        context: post,
      })
    })
  })
}