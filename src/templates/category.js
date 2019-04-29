import React, {Component} from "react"
// import graphql from 'graphql'
import styled from 'styled-components'
import SEO from "../components/seo"
import Layout from "../components/layout"
import {Link, graphql } from 'gatsby'

const TgExcerptLink = styled.a`
    background:red;
`
const ArticleWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
`
const SingleArticleBox = styled.div`
    background:#eee;
`

class SingleCategory extends Component {
    render() {
        const data = this.props.data.allWordpressPost.edges;
        console.log(this.props.data.allWordpressCategory);

        return ( 
            <Layout>
                <SEO title="all posts"  />
                <div className="articles-page">
                    <ArticleWrapper className="article-wrapper ">
                        {data.map(({node}) => (                        
                            <SingleArticleBox key={node.slug} className="single-article-box uk-card uk-card-default uk-card-body">
                                <Link to={'post/' + node.slug}>
                                    <h3 dangerouslySetInnerHTML={{__html:node.title}}/>
                                </Link>
                                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                {/* <div dangerouslySetInnerHTML={{__html:node.excerpt}} /> */}
                                <Link to={'post/' + node.slug}>
                                    <TgExcerptLink>Read More</TgExcerptLink>
                                </Link>
                                <div>
                                    <span>Categories: </span>
                                    <span className="cat">
                                        {node.categories && node.categories.map(
                                                category => <Link to={'categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link>
                                            )
                                        }
                                    </span>
                                    {/* <span dangerouslySetInnerHTML={{__html:node.categories[0].name}} /> */}
                                </div>
                            </SingleArticleBox>
                        ))}
                    </ArticleWrapper>
                </div>
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
