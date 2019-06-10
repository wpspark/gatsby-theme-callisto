import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
// import Menu from "../siteMenu"
import CategoryMenu from "../category-menu/index"
// import logo from "../../images/wpspark-logo.png"
import Helmet from "react-helmet"

export default class Header extends Component {
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }

    render() {
      let wordpressSiteMetadata = this.props.wordpressSiteMetadata;

      return (
        <StaticQuery
          query={graphql`
          query sparkDataFromSite {
              sparkData {
                logo 
                favicon
              } 
            }
          `}
          render={data => {
            const { sparkData } = data;

            return <nav className="navbar is-transparent has-shadow is-spaced is-fixed-top" role="navigation">
              <Helmet
                link={[
                  {
                    "rel": "icon",
                    "type": "image/png",
                    "href": sparkData.favicon
                  }
                ]}
              />
              <div className="navbar-brand">

                <Link to="/" className="navbar-item">

                  {/* {
                    this.state.loading ? <img src={this.state.logo} alt="" width="112" height="28" /> :
                      wordpressSiteMetadata.name
                  } */}
                  
                  {
                    sparkData.logo ? <img src={sparkData.logo} alt="" width="112" height="28" /> :
                      wordpressSiteMetadata.name
                  }

                </Link>

                <span className="navbar-burger burger" data-target="MainsiteNav" onClick={this.toggleDropdownMenu}>
                  <span /><span /><span />
                </span>
              </div>

              <div id="MainsiteNav" className="navbar-menu">
                <div className="navbar-start">

                  <CategoryMenu slug={this.props.slug} />

                </div>

                <div className="navbar-end">
                  {/* <Menu data={this.props.pageContext} /> */}

                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a className="button is-primary" href={wordpressSiteMetadata.url} target="_blank" rel="noopener noreferrer">
                          <span>Mainsite</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          }}
          />
      );
    }
}