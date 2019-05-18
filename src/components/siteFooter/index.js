import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from "../../images/wpspark-logo.png"

export default class Footer extends Component {
    
    render() {

      return (
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Copyright @ <strong>WpSpark</strong>. 
              This site is powered by <a rel="noopener noreferrer" href="https://wpspark.io" target="_blank">WpSpark</a>
            </p>
          </div>
        </footer>
      )
    }
}