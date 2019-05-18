import React, { Component } from 'react'
import Layout from "../layouts"

class NotFoundPage extends Component {
    
  render() {
    return (
        <Layout>
        	<section class="hero is-warning">
			  <div class="hero-body">
			      <h1 class="title">
			        404
			      </h1>
			      <h2 class="subtitle">
			        Page not found!
			      </h2>
			  </div>
			</section>
        </Layout>
    )
  }
}

export default NotFoundPage