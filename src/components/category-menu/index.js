import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"

export default class CategoryMenu extends Component {
    state = { ready: false };
    
    render() {
      const active = this.props.slug;
      
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
              {
                 data.allWordpressCategory.edges.map( ({node}) => (
                  node.count !== 0 ? 
                    <Link key={node.id} className={ active === node.slug ? 'navbar-item is-active' : 'navbar-item'} to={'/categories/' + node.slug} dangerouslySetInnerHTML={{__html:node.name}} />
                  : null 
                ))
              }
            </div>
          )}
        />
      )
    }
}