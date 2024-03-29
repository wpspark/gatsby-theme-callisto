import React, { Component } from 'react'
import Layout from "../layouts/index"
import SEO from "../utils/seo"
import PostAuthor from "../components/post-author/index"
import { Link } from "gatsby"
import { DiscussionEmbed } from "disqus-react";

class PostTemplate extends Component {

	constructor(props) {
		super(props);

		this.state = {
			base_url: process.env.baseUrl,
			featured_image: 'https://via.placeholder.com/600x320'
		}
	}
  
  render() {
		const data = this.props.pageContext.wordpressPost;
		const disqusShortname = this.props.pageContext.site.siteMetadata.disqusShortname;
	
    const disqusConfig = {
			identifier: data.id,
			title: data.title,
    };

    return (
			<Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        	
				<SEO title={data.title} />

				<section className="hero">
					<div className="hero-body">
						<div className="container">
							<div className="section has-text-centered header">
								<h1 className="title" dangerouslySetInnerHTML={{__html:data.title}} />
								<div className="subtitle is-4">
									<time dateTime={new Date(data.date).toLocaleDateString("en-US")}>{data.date}</time>
									
									<div className="tags is-centered are-medium"
										style={{
											margin: '15px auto',
										}}
									>
										{data.categories && data.categories.map(
										category => <span className="tag" key={category.id}><Link key={category.id} to={'/categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
										)}
									</div>
								</div>
							</div>

							{
								<figure className="image is-3by1 image-objectfit-contain">
									<img src={data.spark_media} alt={data.title}/>
								</figure>
							}
							<div className="section hero-content">
								<div className="columns">
									<div className="column is-offset-2 is-8">
										<div className="post content is-medium" dangerouslySetInnerHTML={{__html:data.content}} />
										
										<PostAuthor data={data.spark_user}/>
										
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