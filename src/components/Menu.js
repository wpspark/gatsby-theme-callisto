import React, { Component } from 'react'
import {Link, graphql} from 'gatsby'
import PropTypes from "prop-types"
import './rootStyle.scss'

class Menu extends Component {
    render() {
    const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node['items'];
    return (
      <div className="uk-navbar-container tm-navbar-container">
        <nav className="uk-container" uk-navbar>
            <div className="uk-navbar-left">

                <ul className="uk-navbar-nav">
                    {
                        data.map( (node) => (
                            <li className="uk-active">
                                <a href={node.url}>
                                    {node.title}
                                </a>
                                
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
export default  Menu;
