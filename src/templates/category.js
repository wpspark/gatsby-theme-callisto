import React, { Component } from 'react'
import Layout from "../layouts"
import SEO from "../utils/seo"
import AllPost from "../components/all-post"
import PageTitle from "../components/page-title"
import { Link } from "gatsby"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

class CategoryPage extends Component {
    
  render() {
  	const data = this.props.data;

    const { group, index, first, last } = this.props.pageContext; //pageCount
    console.log(group);
    
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()

  	const category = data.wordpressCategory;


    return (
        <Layout slug={category.slug}>
        
        	<SEO title="Category Page" />
        	
        	<PageTitle title={category.name} subtitle={category.description} />

        	<AllPost data={group} />

          <div className="previousLink">
            <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
          </div>
          <div className="nextLink">
            <NavLink test={last} url={nextUrl} text="Go to Next Page" />
          </div>

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
