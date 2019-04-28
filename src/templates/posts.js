import React, { Component } from 'react'
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import styled from 'styled-components'
import SEO from "../components/seo"
import Layout from "../components/layout"
 
const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

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


class IndexPage extends Component {
    
  render() {
    const { group, index, first, last, pageCount } = this.props.pageContext;
    const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()
    console.log(this.props);
    return (
        <Layout>
            <SEO title="all posts"  />
            <div className="articles-page">
                <h1>{pageCount} Pages</h1>
                <ArticleWrapper className="article-wrapper ">
                    {group.map(({node}) => (                        
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
                                <span className="cat">{node.categories && node.categories.map(category => <span dangerouslySetInnerHTML={{__html:category.name}} /> )}</span>
                                {/* <span dangerouslySetInnerHTML={{__html:node.categories[0].name}} /> */}
                            </div>
                        </SingleArticleBox>
                    ))}
                </ArticleWrapper>

                <div className="previousLink">
                    <NavLink test={first} url={'posts/' + previousUrl} text="Go to Previous Page" />
                </div>
                <div className="nextLink">
                    <NavLink test={last} url={'posts/' + nextUrl} text="Go to Next Page" />
                </div>
            </div>
        </Layout>
    )
  }
}

export default IndexPage