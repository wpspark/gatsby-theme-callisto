import React, { Component } from 'react'
import Layout from "../layouts"
import LatestPost from "../components/latest-post"
import AllPost from "../components/all-post"
import AllPostPagination from "../components/all-post/pagination"
import SEO from "../utils/seo"
import { useStaticQuery, graphql } from "gatsby"

class BlogPage extends Component {
  
  render() {
  	
    const data = this.props.data;

    return (
        <Layout pageContext={this.props.pageContext}>
        	
          <SEO title="Home" />

        	<LatestPost data={data.wordpressPost} />

          <hr />

        	<AllPost data={data.allWordpressPost} />

          <AllPostPagination />

        </Layout>
    )
  }
}

export default BlogPage

// export default IndexPage
export const BlogPageQuery = graphql`
    query BlogPageQuery{
        allWordpressPost(
          sort: {
            fields: [date]
            order: DESC
          }
        ){
            edges{
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
        wordpressPost{
          id
          title
          slug
          categories {
            id
            name
            slug
          }
          tags {
            id
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
`