import React, { Component } from "react"
import SEO from '../components/seo'
import Layout from '../components/layout'
import {Link, graphql } from 'gatsby'
import styled from 'styled-components'
// import PropTypes from "prop-types"
// import Img from "gatsby-image"
import '../components/rootStyle.scss'

const Back = styled.a`
    background:red;
    color:white;
    padding:10px 30px;
    margin-bottom:20px;
    display:inline-block;
`

const SingleArticle = styled.article`
    font-family: 'Roboto', sans-serif;
    padding-top:0px !important;
    img{
        object-fit:cover;
    }
`
const PostContent = styled.div`
    display:grid;
    grid-template-columns:2.5fr .5fr;
`
const PostImage = styled.div`
    img{
        width:100%;
        max-height:450px;
    }
`
const PostMeta = styled.div`
    b, span{
        font-size:16px;
    }
    b{
        color:#333;
        margin-right:10px;
    }
`
const SideBar = styled.div`
    .post-categories{
        a{
            display:inline-block;
            background:#717070;
            color:white;
            padding:5px 15px;
            border-radius:15px;
            &:hover{
                color:white;
            }
        }
    }
    ul{
        padding :0px;
        margin-bottom:50px;
        li{
            list-style:none;
        }
    }
    .uk-article-meta{
        padding:0px 30px;
    }
`


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const featuredMedia = this.props.pageContext.featuredImage;
        return (
            <Layout>
                <SEO title={post.title}/>
                <div className="uk-container uk-container-large">
                    <SingleArticle className="uk-section uk-section-default">
                        <PostImage className="uk-cover-container">
                            <img src={featuredMedia.localFile.childImageSharp.original.src} alt='' /> 
                        </PostImage>
                        <div className="uk-container">
                            <article className="uk-article uk-padding">
                                <div className="uk-grid">

                                    <div className="uk-width-expand@m">
                                        <PostMeta className="uk-article-meta">
                                            <b>Last Update</b>
                                            <span>{post.date}</span>
                                        </PostMeta>

                                        <h1 className="uk-article-title" dangerouslySetInnerHTML={{__html:post.title}} />

                                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                    </div>

                                    <SideBar className="uk-width-1-3@m">
                                        <div className="uk-article-meta">
                                            <ul className="post-categories">
                                                
                                                {post.categories && post.categories.map(
                                                        category => <li><Link key={category.id} to={'categories/'+ category.slug} dangerouslySetInnerHTML={{__html:category.name + " "}}/></li>
                                                    )
                                                }
                                            </ul>

                                            <div className="uk-card uk-card-small uk-margin-top">
                                                <div className="uk-card-header uk-padding-remove">
                                                    <img className="uk-border-circle" width="40" height="40" src="https://getuikit.com/docs/images/avatar.jpg" />
                                                    <h3 className="uk-card-title uk-margin-remove-top">Title</h3>
                                                </div>
                                                <div className="uk-card-body uk-padding-remove">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SideBar>

                                </div>
                            </article>

                        </div>

                    </SingleArticle>
                </div>
                

                {/* <Link to={'/posts'} className="uk-margin uk-margin-remove-left">
                    <Back>Back</Back>
                </Link> */}
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
            date(formatString: "DD MMMM YYYY")
            categories {
                id
                name
                slug
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`