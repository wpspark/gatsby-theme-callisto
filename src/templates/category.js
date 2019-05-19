import React, { Component } from 'react'
import Layout from "../layouts"
import SEO from "../utils/seo"
import AllPost from "../components/all-post"
import PageTitle from "../components/page-title"


class CategoryPage extends Component {
    
  render() {
  	const data = this.props.data;
  	const category = data.wordpressCategory;

    return (
        <Layout slug={category.slug}>
        
        	<SEO title="Category Page" />
        	
        	<PageTitle title={category.name} subtitle={category.description} />

        	<AllPost data={data.allWordpressPost} />

        </Layout>
    )
  }
}

export default CategoryPage

export const categoryQuery = graphql`
    query currentCategoryQuery($slug: String!) {

    	wordpressCategory(slug: { eq: $slug }){
		    id
		    name
            slug
            count
            description
	  	}

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
    }
`
