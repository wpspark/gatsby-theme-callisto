import React, { Component } from 'react'
import {Link} from 'gatsby'
import Menu from "../siteMenu"
import logo from "../../images/wpspark-logo.png"

export default class Header extends Component {
    state = { ready: false };
    
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }

    render() {

      return (
        <nav className="navbar is-transparent has-shadow is-spaced" role="navigation">
          <div className="navbar-item">
            
            <Link to="/" className="navbar-item">
              <img src={logo} alt="" width="112" height="28" />
            </Link>

            <a className="navbar-burger burger" data-target="MainsiteNav"
            onClick={this.toggleDropdownMenu}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>

          <div id="MainsiteNav" className="navbar-menu">
            <div className="navbar-start">
              
              <Link to="/" className="navbar-item">
                Home
              </Link>
                
              <Menu />

            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-primary" href="">
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