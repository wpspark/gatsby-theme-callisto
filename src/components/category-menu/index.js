import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"

export default class CategoryMenu extends Component {
    state = { ready: false };
    
    render() {
      const active = '';
      // console.log(this.props.pageContext)

      return (
        <StaticQuery
          query={graphql`
            query CategoryMenu {
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
          `}
          render={data => (
            <div className="navbar-item is-hoverable">              
              <Link className={ active === '' ? 'navbar-item is-active' : 'navbar-item'} to="/">
                Home
              </Link>
              {
                 data.allWordpressCategory.edges.map( ({node}) => (
                  <Link key={node.id} className={ active === node.slug ? 'navbar-item is-active' : 'navbar-item'} to={'categories/' + node.slug} 
                  dangerouslySetInnerHTML={{__html:node.name}} />
                ))
              }
            </div>
          )}
        />
      )
    }
}