import React, { Component } from "react"
import SEO from '../components/seo'
import Layout from '../components/layout'
import {Link, graphql } from 'gatsby'
import styled from 'styled-components'
// import PropTypes from "prop-types"
// import Img from "gatsby-image"

const Back = styled.a`
    background:red;
    color:white;
    padding:10px 30px;
    margin-bottom:20px;
    display:inline-block;
`

const SingleArticle = styled.div`
    img{
        object-fit:cover;
    }
`


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        return (
            <Layout>
                <SEO title={post.title}/>
                <Link to={'/posts'}>
                    <Back>Back</Back>
                </Link>

                <SingleArticle>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </SingleArticle>
            </Layout>
            
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`