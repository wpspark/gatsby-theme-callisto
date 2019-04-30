import React, { Component } from 'react'
// import PropTypes from "prop-types"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogList from '../components/BlogList'

class IndexPage extends Component {
    
  render() {
    return (
        <Layout>
            <SEO title="all posts"  />
            <BlogList pageContext={this.props.pageContext}/>
        </Layout>
    )
  }
}

export default IndexPage
