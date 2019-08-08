import React, { Component } from 'react'
import { Link } from "gatsby"

export default class AllPost extends Component {
    
    render() {
      let data = this.props.data;
      let ignorefirst = this.props.ignorefirst;
      
      return (
        <section className="hero">
          <div className="hero-body">
            <div className="columns is-multiline is-1-mobile">
              {
                data.map((node, index) => {
                  console.log("node ", node)
                  return (ignorefirst && index === 0) ? null : 
                  <div key={index} className={'column is-one-third' }>
                    <article className="card"> 
                      {
                        node.node.spark_media === undefined ? null :
                        <div className="card-image">
                          <figure className="image">
                            <img src={node.node.spark_media} alt={data.title} />
                          </figure>
                        </div>
                      }
                      <div className="card-content">
                        <div className="media">
                          <div className="media-left">
                            <figure className="image is-48x48">
                              <img src={node.node.spark_user.avatar_urls.wordpress_96} alt={node.node.spark_user.name}/>
                            </figure>
                          </div>
                          <div className="media-content">
                            <h3 className="title is-4">
                              <Link to={'/post/' + node.node.slug} dangerouslySetInnerHTML={{__html:node.node.title + " "}} />
                            </h3>
                            <p className="subtitle is-6" dangerouslySetInnerHTML={{__html:"@" + node.node.spark_user.name + " "}} />
                          </div>
                        </div>

                        <div className="content">
                          
                          <div className="tags ">
                            <time className="tag is-white" dateTime={new Date(node.node.date).toLocaleDateString("en-US")}>{node.node.date}</time>
                            {node.node.categories && node.node.categories.map(
                              category => <span className="tag" key={category.id}><Link key={category.id} to={'/categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                })
              }
            </div>
          </div>
        </section>
      )
    }
}