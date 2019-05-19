import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default class AllPost extends Component {
    state = { ready: false };
    
    render() {
      let data = this.props.data;
      return (
        <div className="columns is-multiline is-1-mobile ">
          {
            data.edges.map((node, index) => {
              console.log(node.node)
              return <div key={index} className={'column is-one-third' }>
                <article className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={node.node.author.avatar_urls.wordpress_96} alt={node.node.author.name}/>
                        </figure>
                      </div>
                      <div className="media-content">
                      <h3 className="title is-4">
                          <Link to={'post/' + node.node.slug}>
                            {node.node.title}
                          </Link>
                        </h3>
                        <p className="subtitle is-6">@{node.node.author.name}</p>
                      </div>
                    </div>

                    <div className="content">
                      
                      <div className="tags are-medium">
                          {node.node.categories && node.node.categories.map(
                                  category => <span className="tag" key={category.id}><Link key={category.id} to={'categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
                              )
                          }
                          <time className="tag is-white" datetime={new Date(node.node.date).toLocaleDateString("en-US")}>{node.node.date}</time>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            })
          }
        </div>
      )
    }
}


// <div className="tile is-ancestor">
//                 <div className="tile is-parent">
//                   <article className="tile is-child box">
//                     <p className="title">Hello World</p>
//                     <p className="subtitle">What is up?</p>
//                   </article>
//                 </div>
//                 <div className="tile is-parent">
//                   <article className="tile is-child box">
//                     <p className="title">Foo</p>
//                     <p className="subtitle">Bar</p>
//                   </article>
//                 </div>
//                 <div className="tile is-parent">
//                   <article className="tile is-child box">
//                     <p className="title">Third column</p>
//                     <p className="subtitle">With some content</p>
//                     <div className="content">
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
//                     </div>
//                   </article>
//                 </div>
//               </div>