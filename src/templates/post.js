import React, { Component } from "react"
import SEO from '../components/seo'
import Layout from '../components/layout'
import {Link, graphql } from 'gatsby'
import styled from 'styled-components'
import AllCategroy from '../components/AllCategory'
import Soical from '../components/Social'

// import PropTypes from "prop-types"
// import Img from "gatsby-image"
import '../components/rootStyle.scss'

// const Back = styled.a`
//     background:red;
//     color:white;
//     padding:10px 30px;
//     margin-bottom:20px;
//     display:inline-block;
// `

const SingleArticle = styled.article`
    font-family: 'Noto Sans JP', sans-serif;
    padding-top:0px !important;
    img{
        object-fit:cover;
    }
`
// const PostContent = styled.div`
//     display:grid;
//     grid-template-columns:2.5fr .5fr;
// `
const PostImage = styled.div`
    img{
        width:100%;
        // max-height:450px;
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
            background:#929292;
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
    .important-links{
        padding-top:50px;
        margin-top:35px;
        border-top:solid 2px #e4e4e4;
        // h4{
            /* margin-bottom:0px; */
        // }
        ul{
            display:block;
            width:100%;
            a{
                display:inline-block;
                text-align:left;
                min-height:auto;
                padding:0;
            }
        }
    }
`
const PostMainContent = styled.div`
    .su-button{
        padding:15px 30px;
    }
    p{
        font-size:18px;
        a{
            color:#1abc9c;
            font-family:'Montserrat', sans-serif;
        }
        img{
            border:solid 1px #e4e4e4;
            margin-bottom:15px;
        }
    }
`
const PostAuthor = styled.div`
    .uk-card-body{
        font-size:16px;
        margin:15px 0px 10px;
    }
`
const SocialShare = styled.div`
    padding-top:35px;
    border-top:solid 2px #e4e4e4;
`


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const featuredMedia = this.props.pageContext.featuredImage;
        return (
            <Layout>
                <SEO title={post.title}/>

                <AllCategroy data={this.props.data.allWordpressCategory} />
                
                <div className="uk-background-muted">
                <div className="uk-container uk-container">
                    <SingleArticle className="uk-section uk-section-default">
                        <PostImage className="uk-position-relative uk-text-center">
                            <img src={featuredMedia.localFile.childImageSharp.original.src} alt='' uk-img=""/> 
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
                                        
                                        <PostMainContent className="post-main-content">
                                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                        </PostMainContent>

                                    </div>

                                    <SideBar className="uk-width-1-3@m">

                                        <div className="uk-article-meta" uk-sticky="offset: 100;">
                                            
                                            <ul className="post-categories">
                                                {post.categories && post.categories.map(
                                                        category => <li className="uk-margin"><Link key={category.id} to={'categories/'+ category.slug} dangerouslySetInnerHTML={{__html:category.name + " "}}/></li>
                                                    )
                                                }
                                            </ul>

                                            <PostAuthor className="uk-card uk-card-small uk-margin-top">
                                                <div className="uk-card-header uk-padding-remove">
                                                    <img className="uk-border-circle" width="40" height="40" src="https://secure.gravatar.com/avatar/0989fdc8ffeffc2bdeba299560136f77" alt=""/>
                                                    <h3 className="uk-card-title uk-margin-remove-top">Anam Hossain</h3>
                                                </div>
                                                <div className="uk-card-body uk-padding-remove">
                                                    <p>
                                                    Web developer
                                                    </p>
                                                </div>
                                            </PostAuthor>
                                            
                                            <SocialShare className="social-share">
                                                <Soical />
                                            </SocialShare>
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
                </div>
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
        allWordpressCategory{
            edges{
              node{
                id
                wordpress_id
                slug
                name
                count
              }
            }
        }
    }
`