import React, { Component } from 'react'
import Header from "../components/site-header/index"
import Footer from "../components/site-footer/index"

import "../utils/typography"

class Layout extends Component {
  
  render() {
    return (
      <div className="wp-spark-app">

        <Header slug={this.props.slug} wordpressSiteMetadata={this.props.wordpressSiteMetadata}/>

      	<main>
	        <div className="container is-fluid common-spacing">
            {this.props.children}
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default Layout;

