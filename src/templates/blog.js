import React, { Component } from 'react'
import Layout from "../layouts"
import LatestPost from "../components/latest-post"
import AllPost from "../components/all-post"
import SEO from "../utils/seo"
import { useStaticQuery, graphql } from "gatsby"

class BlogPage extends Component {
  
  render() {
  	
    const data = this.props.data;
  	console.log(data);

    return (
        <Layout pageContext={this.props.pageContext}>
        	<SEO title="Home" />

        	<LatestPost />

        	<AllPost data={data.allWordpressPost} />

        	<h1>Blog Page - Index</h1>
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
        }
      }
`