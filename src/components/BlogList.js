import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Link from 'gatsby-link'
import styled from 'styled-components'
import './rootStyle.scss'


const NavLink = props => {
    if (!props.test) {
      return <Link to={props.url}>{props.text}</Link>
    } else {
      return <span>{props.text}</span>
    }
}


const ArticleWrapper = styled.div`
    /* display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:30px; */
`

const FirstGroup = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:30px;
    margin-bottom:30px;
    .single-article-box{
        &:hover{
        .image-wrapper{
            transform:scale(.98, .98);
        }
    }
    }
    .image-wrapper{
        margin-bottom:0 !important;
        transform:scale(1, 1);
        transition:all 0.4s ease;
        >img{
            border-radius:5px;
        }
    }
    
    .post-author-meta{
        bottom:23px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 10px;
        img{
            width:50px;
            height:50px;
            border-radius:50%;
            margin:0;
        }
    }
`
const SecondGroup = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:30px;
    .single-article-box{
        &:hover{
            .image-wrapper{
                transform:scale(.98, .98);
            }
        }
    }
    .image-wrapper{
        margin-bottom:10px !important;
        transform:scale(1, 1);
        transition:all 0.4s ease;
        >img{
            border-radius:5px;
        }
    }
    h4{
        margin-top:20px;
    }
`


const SingleArticleBox = styled.div`
    a{
        color:#4c4c4c;
        &:hover{
            text-decoration:none;
            h4{
                color:#3a3a3a;
            }
        }
    }
    h4{
        font-size:20px;
        transition:all 0.4s ease;
    }
    span.cat{
        a{
            color:#929292;
            margin:0px 5px;
            transition:all 0.4s ease;
            &:hover{
                color:#3a3a3a;
            }
        }
        
    }
`
const FeaturedImage = styled.div`
    .image-wrapper{
        margin-bottom:35px;
    }
`
const PostAuthor = styled.div`
    position:absolute;
    text-align:center;
    left:0;
    right:0;
    bottom:-25px;
    img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
`


class BlogList extends Component {
    componentWillMount(){
        
    }
  render() {
    const { group, index, first, last, pageCount } = this.props.pageContext;
    const firstGroup = group.slice(0, 2);
    const secondGroup = group.slice(3, -1);

    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    return (
        <div className="articles-page">
            {/* <h1>{pageCount} Pages</h1> */}
            <ArticleWrapper className="article-wrapper ">
                <FirstGroup className="firstGroup">
                {firstGroup.map(({node}) => (  
                    <SingleArticleBox key={node.id} className="single-article-box uk-card">
                                            
                        <FeaturedImage className="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <div className="image-wrapper uk-transition-opaque">
                                <img  src={node.featured_media.localFile.childImageSharp.original.src} alt=""/>
                                <PostAuthor className="post-author-meta">
                                    {/* <img src="https://secure.gravatar.com/avatar/0989fdc8ffeffc2bdeba299560136f77" /> */}
                                    <div>
                                        <span>
                                            <img src="https://secure.gravatar.com/avatar/0989fdc8ffeffc2bdeba299560136f77" />
                                        </span>
                                    </div>
                                    <div>
                                        <span className="cat">
                                            {node.categories && node.categories.map(
                                                    category => <Link key={category.id} to={'categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link>
                                                )
                                            }
                                        </span>
                                    </div>
                                </PostAuthor>
                            </div>
                            
                        </FeaturedImage>

                        <Link to={'post/' + node.slug}>
                            <h4 dangerouslySetInnerHTML={{__html:node.title}}/>
                        </Link>

                        
                    </SingleArticleBox>
                ))}
                </FirstGroup>

                <SecondGroup className="secondGroup">
                {secondGroup.map(({node}) => (  
                    <SingleArticleBox key={node.id} className="single-article-box uk-card">
                                            
                        <FeaturedImage className="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <div className="image-wrapper uk-transition-opaque">
                                <img  src={node.featured_media.localFile.childImageSharp.original.src} alt=""/>
                                <PostAuthor>
                                    <img src="https://secure.gravatar.com/avatar/0989fdc8ffeffc2bdeba299560136f77" />
                                </PostAuthor>
                            </div>
                        </FeaturedImage>

                        <Link to={'post/' + node.slug}>
                            <h4 dangerouslySetInnerHTML={{__html:node.title}}/>
                        </Link>

                        <div>
                            <span className="cat">
                                {node.categories && node.categories.map(
                                        category => <Link key={category.id} to={'categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link>
                                    )
                                }
                            </span>
                        </div>
                    </SingleArticleBox>
                ))}
                </SecondGroup>
            </ArticleWrapper>

            {/* <div className="previousLink">
                <NavLink test={first} url={'posts/' + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={'posts/' + nextUrl} text="Go to Next Page" />
            </div> */}
        </div>
    )
  }
}
export default BlogList;