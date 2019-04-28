import React, {Component} from "react"
// import graphql from 'graphql'
import styled from 'styled-components'
import SEO from "../components/seo"
import Layout from "../components/layout"
import {Link, graphql } from 'gatsby'



class SingleCategory extends Component {
    render() {
        console.log(this.props);
        // const siteMetadata = this.props.data.site.siteMetadata
        // const currentPage = this.props.data.wordpressPage

        // console.log(currentPage)
        // console.log(siteMetadata);

        return ( 
            <Layout>
                <SEO title="title" />
                <div>Single category</div>
            </Layout>
            

        )
    }
}

export default SingleCategory

export const categoryQuery = graphql`
    query currentCategoryQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`
