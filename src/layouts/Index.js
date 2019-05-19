import React, { Component } from 'react'

import Header from "../components/siteHeader"
import Footer from "../components/siteFooter"

import "../utils/Typography"

class Layout extends Component {
    
  render() {
    // console.log(this.props.pageContext)
    return (
      <div className="wp-spark-app">
        <Header pageContext={this.props.pageContext}/>

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

export default Layout
