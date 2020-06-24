/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div>
      <h2>Post Index Test</h2>
      <p>Sticking the post index on the landing page just to test it works.</p>
      <ul>
        {data.allMarkdownRemark.edges.map( post => (
          <li key={post.node.id}>
            <Link to={post.node.frontmatter.path} >{post.node.frontmatter.title }</Link>
          </li>
          ))}
      </ul>
    </div>
      

    <Link to="/page-2/">Go to page 2</Link>

    
  </Layout>
)

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark (
    limit: 10
    sort: {fields : [frontmatter___date], order : DESC }
    filter: {frontmatter : {published : {eq : true}}}
  ){
    edges {
      node {
        id
        frontmatter {
          title
          path
          date
          published
        }
        html
      }
    }
  }
}
`


export default IndexPage

