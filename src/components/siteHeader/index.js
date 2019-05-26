import React, { Component } from 'react'
import { Link } from "gatsby"
import axios from "axios"
// import Menu from "../siteMenu"
import CategoryMenu from "../category-menu/index"
// import logo from "../../images/wpspark-logo.png"
import Helmet from "react-helmet"

export default class Header extends Component {
    state = {
      loading: false,
      favicon: '',
      logo: '',
    }

    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }

    componentDidMount() {
      this.featchWpSparkData()
    }

    featchWpSparkData(){
      if(this.props.wordpressSiteMetadata === undefined) return true;
      
      let url = this.props.wordpressSiteMetadata.url;
      // this.setState({ loading: true })
      if(!window.siteData) {
        axios
          .get(`${url}/wp-json/spark/sitedata`)
          .then(pupper => {
            let dataObject = pupper.data[0];

            const favicon = dataObject.icon
            const logo = dataObject.logo

            window.siteData = {
              loading: true,
              favicon,
              logo
            }

            this.setState(window.siteData)
          })
          .catch(error => {
            this.setState({ loading: false })
          })
      } else {
        this.setState(window.siteData)
      }
    }

    render() {
      let wordpressSiteMetadata = this.props.wordpressSiteMetadata;

      return (
        <nav className="navbar is-transparent has-shadow is-spaced is-fixed-top" role="navigation">
          <Helmet
              link={[
                {
                  "rel": "icon", 
                  "type": "image/png", 
                  "href": this.state.favicon
                }
              ]}
          />
          <div className="navbar-brand">
            
            <Link to="/" className="navbar-item">
              
              {
                this.state.loading ? <img src={this.state.logo} alt="" width="112" height="28" /> : 
                wordpressSiteMetadata.name
              }

            </Link>

            <span className="navbar-burger burger" data-target="MainsiteNav" onClick={this.toggleDropdownMenu}>
              <span/><span/><span/>
            </span>
          </div>

          <div id="MainsiteNav" className="navbar-menu">
            <div className="navbar-start">
              
              <CategoryMenu slug={this.props.slug}/>

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
      )
    }
}