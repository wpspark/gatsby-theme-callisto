import React, { Component } from 'react'
import Layout from "../layouts/index"
import SEO from "../utils/seo"
import AllPost from "../components/all-post/index"
import PageTitle from "../components/page-title/index"
import { graphql } from "gatsby"

class CategoryPage extends Component {
    
  render() {
    
    const category = this.props.pageContext.wordpressCategory;
    const currentCategoryPosts = this.props.data.allWordpressPost;
    
    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        
        	<SEO title="Category Page" />
        	
        	<PageTitle title={category.name} subtitle={category.description} />

        	<AllPost data={currentCategoryPosts.edges} />

        </Layout>
    )
  }
}

export default CategoryPage

export const categoryQuery = graphql`
  query currentCategoryQuery($slug: String!) {

    allWordpressPost(filter: {
        categories: {
            elemMatch: {
                slug: { eq: $slug }
            }
        }
    }) {
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
                
                spark_user {
                  name
                  slug
                  avatar_urls {
                    wordpress_96
                  }
                }
                spark_media
            }
        }
    }
  }
`