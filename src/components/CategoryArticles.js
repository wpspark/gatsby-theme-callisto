import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Link from 'gatsby-link'
import styled from 'styled-components'
import './rootStyle.scss'


const ArticleWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
`
const SingleArticleBox = styled.div`
    background:#eee;
`
const FeaturedImage = styled.div`
    img{
        border:solid 1px #ddd;
    }
`

class CategoryArticles extends Component {

render() {
    const data = this.props.data;
    return (
            <ArticleWrapper className="article-wrapper ">
                {data.map(({node}) => (                        
                    <SingleArticleBox key={node.slug} className="single-article-box uk-card uk-card-default uk-card-body">
                        <FeaturedImage>
                            <img src={node.featured_media.localFile.childImageSharp.original.src} alt=""/>
                        </FeaturedImage>
                        <Link to={'post/' + node.slug}>
                        <h3 dangerouslySetInnerHTML={{__html:node.title}}/>
                        </Link>
                        <div>
                            <span className="cat">
                                {node.categories && node.categories.map(
                                        category => <Link key={category.id} to={'categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link>
                                    )
                                }
                            </span>
                            {/* <span dangerouslySetInnerHTML={{__html:node.categories[0].name}} /> */}
                        </div>
                    </SingleArticleBox>
                ))}
            </ArticleWrapper>
    )
  }
}

export default CategoryArticles;