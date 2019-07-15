import React, { Component } from 'react'
import Layout from "../layouts/index"
import LatestPost from "../components/latest-post/index"
import AllPost from "../components/all-post/index"
import AllPostPagination from "../components/all-post/pagination"
import SEO from "../utils/seo"

class BlogPage extends Component {

  render() {
    
    // const { group, index, first, last, pageCount} = this.props.pageContext; //pageCount
    // const data = this.props.pageContext.allPosts.edges;
    const allPosts = this.props.data.allWordpressPost;
    const firstPost = allPosts.edges[0].node;
    const next = this.props.pageContext.next;
    const prev = this.props.pageContext.prev;
    const numberOfPostsPerPages = this.props.pageContext.numberOfPostsPages;

    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        	
          <SEO title="Home" />

        	<LatestPost data={firstPost} />


        	<AllPost data={allPosts.edges} ignorefirst="true"/>

          <AllPostPagination prev={prev} next={next} pageCount={numberOfPostsPerPages}/>

        </Layout>
    )
  }
}

export default BlogPage



export const query = graphql`
  query PostQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: {
        fields: [date]
        order: DESC
      }
      limit: $limit
      skip: $skip
    ){
      edges {
        node{
          id
          wordpress_id
          title
          excerpt
          content
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
          spark_media
          tags {
            id
            name
            slug
          }
        }
      }
    }
  }
`