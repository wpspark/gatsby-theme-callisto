import React, {Component} from "react"
// import graphql from 'graphql'
import styled from 'styled-components'
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import CategoryArticles from '../components/CategoryArticles'

const ArticlePage = styled.div`
    h2{
        margin:30px 0px;
    }
`

class SingleCategory extends Component {
    render() {
        const data = this.props.data.allWordpressPost.edges;
        const title = this.props.pageContext.name;

        return ( 
            <Layout>
                <SEO title="all posts"  />
                <ArticlePage className="articles-page">
                    <h2 dangerouslySetInnerHTML={{__html:title}} />
                    <CategoryArticles data={data} />
                </ArticlePage>
            </Layout>
        )
    }
}

export default SingleCategory

export const categoryQuery = graphql`
    query currentCategoryQuery($slug: String!) {

        allWordpressPost(filter: {
            categories: {
                elemMatch: {
                    slug: { eq: $slug }
                }
            }
            }) {
            edges {
                node {
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

        site {
            siteMetadata {
                title
            }
        }
    }
`
