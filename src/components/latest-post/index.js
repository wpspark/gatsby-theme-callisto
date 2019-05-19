import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"

export default class LatestPost extends Component {
    state = { ready: false };
    
    render() {
      let data = this.props.data;
      return (
        <section className="hero">
          <div className="hero-body">
            <div className="container-fluid has-text-centered">
              <div className="tags are-medium is-centered">
                  {data.categories && data.categories.map(
                          category => <span className="tag" key={category.id}><Link key={category.id} to={'categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
                      )
                  }
              </div>
              <h1 className="title">
                <Link to={'post/' + data.slug} dangerouslySetInnerHTML={{__html:data.title + " "}} />
              </h1>
              {
                data.featured_media === undefined ? null :
                  <figure className="image is-3by1 image-objectfit-contain">
                    <img src={data.featured_media.localFile.childImageSharp.original.src} alt={data.title} />
                  </figure>
              }
              
            </div>
          </div>
        </section>
      )
      // return (
      //   <StaticQuery
      //     query={graphql`
      //       query LatestPost {
      //         wordpressPost{
      //           id
      //           title
      //           slug
      //           categories {
      //             id
      //             name
      //             slug
      //           }
      //           tags {
      //             id
      //           }
      //           excerpt
      //         }
      //       }
      //     `}
      //     render={data => (
      //       <section className="hero">
      //         <div className="hero-body">
      //           <div className="container-fluid has-text-centered">
      //             <div className="tags are-medium is-centered">
      //                 {data.wordpressPost.categories && data.wordpressPost.categories.map(
      //                         category => <span className="tag" key={category.id}><Link key={category.id} to={'categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
      //                     )
      //                 }
      //             </div>
      //             <h1 className="title">
      //               <Link to={'post/' + data.wordpressPost.slug} dangerouslySetInnerHTML={{__html:data.wordpressPost.title + " "}} />
      //             </h1>
      //             {
      //               data.featured_media === undefined ? null :
      //                 <figure className="image is-3by1">
      //                   <img src={data.featured_media.localFile.childImageSharp.original.src} alt={data.title} />
      //                 </figure>
      //             }
                  
      //           </div>
      //         </div>
      //       </section>
      //     )}
      //   />
      // )
    }
}