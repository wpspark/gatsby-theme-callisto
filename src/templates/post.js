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
    img{
        object-fit:cover;
    }
`
const PostContent = styled.div`
    display:grid;
    grid-template-columns:2.5fr .5fr;
`


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        console.log(post);
        const featuredMedia = this.props.pageContext.featuredImage;
        return (
            <Layout>
                <SEO title={post.title}/>
                <div className="uk-section uk-section-default">
                    <div className="uk-cover-container">
                        <img src={featuredMedia.localFile.childImageSharp.original.src} alt='' /> 
                    </div>
                    <div className="uk-container uk-container-small">
                        <article className="uk-article uk-padding">
                            <div className="uk-grid">
                                <div className="uk-width-expand@m">
                                    <p className="uk-article-meta">
                                        <span>April 23, 2019</span> | <span>News</span>
                                    </p>

                                    <h1 className="uk-article-title">
                                        {post.title}
                                    </h1>  

                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />


                                </div>
                                <div className="uk-width-1-3@m">
                                    <div className="uk-article-meta uk-padding">
                                        <span className="uk-label uk-margin-bottom">Default</span>

                                        <span className="uk-label uk-label-success uk-margin-bottom">Success</span>

                                        <span className="uk-label uk-label-warning uk-margin-bottom">Warning</span>

                                        <span className="uk-label uk-label-danger uk-margin-bottom">Danger</span>

                                        <div className="uk-card uk-card-small uk-margin-top">
                                            <div className="uk-card-header uk-padding-remove">
                                                <img className="uk-border-circle" width="40" height="40" src="https://getuikit.com/docs/images/avatar.jpg" />
                                                <h3 className="uk-card-title uk-margin-remove-top">Title</h3>
                                            </div>
                                            <div className="uk-card-body uk-padding-remove">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            </div>
                                        </div>

                                        <hr className="uk-divider-icon"></hr>

                                        <ul className="uk-nav uk-nav-default">
                                            <li className="uk-active"><a href="#"><span className="uk-margin-small-right uk-icon" uk-icon="icon: table"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="table"><rect x="1" y="3" width="18" height="1"></rect><rect x="1" y="7" width="18" height="1"></rect><rect x="1" y="11" width="18" height="1"></rect><rect x="1" y="15" width="18" height="1"></rect></svg></span> Active</a></li>
                                            <li><a href="#"> <span className="uk-margin-small-right uk-icon" uk-icon="icon: table"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="table"><rect x="1" y="3" width="18" height="1"></rect><rect x="1" y="7" width="18" height="1"></rect><rect x="1" y="11" width="18" height="1"></rect><rect x="1" y="15" width="18" height="1"></rect></svg></span>Item</a></li>
                                            <li><a href="#"> <span className="uk-margin-small-right uk-icon" uk-icon="icon: table"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="table"><rect x="1" y="3" width="18" height="1"></rect><rect x="1" y="7" width="18" height="1"></rect><rect x="1" y="11" width="18" height="1"></rect><rect x="1" y="15" width="18" height="1"></rect></svg></span>Item</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>

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
            date(formatString: "YYYY MMMM DD")
            categories {
                id
                name
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`