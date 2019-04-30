import React, { Component } from 'react'
import {Link, graphql} from 'gatsby'

export default class AllCategroy extends Component {
  render() {
    const allCat = this.props.data;
    return (
      <div className="all-category">
        <nav className="uk-container">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li> 
                <Link to='/'>
                  <span>All</span>
                </Link>
              </li>
              {
                allCat.edges.map( ({node}) => (
                  node.count>0 && 
                  <li key={node.id}> 
                    <Link to={'categories/' + node.slug}>
                      <span dangerouslySetInnerHTML={{__html:node.name}} />
                    </Link>
                  </li>
                ) )
              }
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export const AllCategoryQuery = graphql`
  query AllCategoryQuery{
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