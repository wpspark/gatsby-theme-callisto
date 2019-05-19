import React, { Component } from 'react'
import Layout from "../layouts"
import LatestPost from "../components/latest-post"
import AllPost from "../components/all-post"
import AllPostPagination from "../components/all-post/pagination"
import SEO from "../utils/seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react";

class PostTemplate extends Component {
  
  render() {
  	
    const data = this.props.data;

    const disqusShortname = "themesgrove-blog";
    const disqusConfig = {
		identifier: data.wordpressPost.id,
		title: data.wordpressPost.title,
    };

    return (
        <Layout pageContext={this.props.pageContext}>
        	
          	<SEO title={data.wordpressPost.title} />

          	<section className="hero">
			  	<div className="hero-body">
			    	<div className="container">
			    		<div className="section has-text-centered header">
				      		<h1 className="title" dangerouslySetInnerHTML={{__html:data.wordpressPost.title}} />
				      		<p className="subtitle is-4">
				      			<time datetime={new Date(data.wordpressPost.date).toLocaleDateString("en-US")}>{data.wordpressPost.date}</time>
				      			
				      			<div className="tags is-centered are-medium"
					      			style={{
					      				margin: '15px auto',
					      			}}
				      			>
		                            {data.wordpressPost.categories && data.wordpressPost.categories.map(
		                              category => <span className="tag" key={category.id}><Link key={category.id} to={'categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
		                            )}
		                        </div>
				      		</p>
			    		</div>

			      		{
			                data.wordpressPost.featured_media === undefined ? null :
			                <figure className="image is-3by1 image-objectfit-contain">
			                	<img src={data.wordpressPost.featured_media.localFile.childImageSharp.original.src} alt={data.wordpressPost.title} />
			                </figure>
			            }
			            <div className="section hero-content">
				        	<div className="columns">
				            	<div className="column is-offset-2 is-8">
				              		<div className="post content is-medium" dangerouslySetInnerHTML={{__html:data.wordpressPost.content}} />
				              		

				              		<br/><hr /><br/>
									
									{
										data.wordpressPost.author === undefined ? null : 
										<section className="hero is-light">
											<div className="hero-body">
												<div className="container-fluid has-text-centered">
													<h1 className="title">{data.wordpressPost.author.name}</h1>
													
													<div className="is-inline-block">
														<figure className="image is-128x128 image-objectfit-contain">
															<img className="is-rounded" width="96" height="96" 
																src={ data.wordpressPost.author.avatar_urls.wordpress_96 } 
																alt={ data.wordpressPost.author.name }
															/>
														</figure>
													</div>

													<h2 className="subtitle">{data.wordpressPost.author.description}</h2>

												</div>
											</div>
										</section>
									}

									<br/><hr /><br/>
									
									<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

			    				</div>
		    				</div>
	    				</div>


			    	</div>
			  	</div>
			</section>


        </Layout>
    )
  }
}

export default PostTemplate

export const currentPostQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            id
            title
            content
            date(formatString: "DD MMMM YYYY")
            categories {
                id
                name
                slug
            }
            author{
                name
                avatar_urls{
                    wordpress_96
                }
                description
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
	        tags {
	            id
	            name
	            slug
	        }
        }
    }
`