// import React from "react"
import React, { Component } from 'react'

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// import '../components/rootStyle.scss'

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
//       <h3 className="uk-card-title">Default</h3>
//       <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//   </div>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

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
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hey man ! I am a people who will dominate you very soon. </h1>
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 className="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}
export default MainIndexPage;

// export default IndexPage
