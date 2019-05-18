import React, { Component } from 'react'

import Header from "../components/siteHeader"
import Footer from "../components/siteFooter"

import "../utils/Typography"

class Layout extends Component {
    
  render() {
    return (
      <>
        <Header />

      	<main>
	        <div className="container is-fluid common-spacing">
            {this.props.children}
          </div>
        </main>

        <Footer />
      </>
    )
  }
}

export default Layout
