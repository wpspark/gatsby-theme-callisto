// import React from "react"
import React, { Component } from 'react'

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from '../components/BlogList'
import AllCategroy from '../components/AllCategory'
import FirstPost from '../components/FirstPost'
// import AllCategroy from '../components/AllCategory'

import '../components/rootStyle.scss'
import '../../node_modules/uikit/dist/js/uikit.js';


class MainIndexPage extends Component {
  // state = { ready: false };
  // componentDidMount = () => {
  //   console.log("hellow component");
  //   if (typeof window !== 'undefined') {
  //     const uikit = require('uikit');
  //     console.log(uikit);
  //     const icons = require('uikit/dist/js/uikit-icons.min');
  //     console.log(icons);
  //     uikit.use(icons);
  //     this.setState({ ready: true });
  //   }
  // };
  render() {
    // console.log(this.props);
    const data = this.props.data;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <FirstPost data={data.wordpressPost}/>
        <AllCategroy data={data.allWordpressCategory} />
        {/* <AllCategroy data={this.props.data.allWordpressCategory}/> */}
        <div className="post-lists">
          <div className="uk-container">
            <BlogList pageContext={this.props.pageContext}/>
          </div>
        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
}
export default MainIndexPage;

// export default IndexPage
export const postsQuery3 = graphql`
    query postsQuery3{
        allWordpressPost(
          sort: {
            fields: [date]
            order: DESC
          }
        ){
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    categories{
                        id
                        name
                        slug
                        link
                    }
                }
            }
        }
        allWordpressCategory{
          edges{
            node{
              id
              wordpress_id
              slug
              name
              count
            }
          }
        }
        wordpressPost{
          id
          title
          slug
          categories {
            id
            name
            slug
          }
          featured_media{
            localFile{
                childImageSharp{
                    original {
                        width
                        height
                        src
                    }
                }
            }
          }
        }
    }
`