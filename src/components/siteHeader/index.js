import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Menu from "../siteMenu"
import CategoryMenu from "../category-menu"
import logo from "../../images/wpspark-logo.png"

export default class Header extends Component {
    state = { ready: false };
    
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }

    render() {
      const active = this.props.active;
      const pageContext = this.props.pageContext;
      return (
        <StaticQuery
          query={graphql`
            query siteHeader {
              wordpressSiteMetadata{
                name
                description
                url
                home
              }
            }
          `}
          render={data => (
            <nav className="navbar is-transparent has-shadow is-spaced is-fixed-top" role="navigation">
              <div className="navbar-brand">
                
                <Link to="/" className="navbar-item">
                  <img src={logo} alt="" width="112" height="28" />
                </Link>

                <span className="navbar-burger burger" data-target="MainsiteNav" onClick={this.toggleDropdownMenu}>
                  <span/><span/><span/>
                </span>
              </div>

              <div id="MainsiteNav" className="navbar-menu">
                <div className="navbar-start">
                  
                  {/*<Menu data={this.props.pageContext}/>*/}

                  <CategoryMenu pageContext={this.props.pageContext}/>

                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a className="button is-primary" href={data.wordpressSiteMetadata.url} target="_blank" rel="noopener noreferrer">
                            <span>Mainsite</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          )}
        />
      )
    }
}