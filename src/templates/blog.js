import React, { Component } from 'react'
import Layout from "../layouts"
import LatestPost from "../components/latest-post"
import AllPost from "../components/all-post"
import AllPostPagination from "../components/all-post/pagination"
import SEO from "../utils/seo"
import { Link } from "gatsby"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

class BlogPage extends Component {

  render() {

    // const data = this.props.data;
    const { group, index, first, last } = this.props.pageContext; //pageCount
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.additionalContext.wordpressSiteMetadata}>
        	
          <SEO title="Home" />

        	<LatestPost data={group[0].node} />

          <hr />

        	<AllPost data={group} ignorefirst="true"/>

          <AllPostPagination />

          <div className="previousLink">
            <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
          </div>
          <div className="nextLink">
            <NavLink test={last} url={nextUrl} text="Go to Next Page" />
          </div>

        </Layout>
    )
  }
}

export default BlogPage