import React, { Component } from 'react'
import Layout from "../layouts"

class NotFoundPage extends Component {
    
  render() {
    return (
        <Layout>
        	<section className="hero is-warning">
			  <div className="hero-body">
			      <h1 className="title">
			        404
			      </h1>
			      <h2 className="subtitle">
			        Page not found!
			      </h2>
			  </div>
			</section>
        </Layout>
    )
  }
}

export default NotFoundPage