// ===[ Example of page with no typescript fluf ]=== //


/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <div>
      <h2>Post Index Test</h2>
      <p>This will be the template for the blog on its own page vs on the home/index page.</p>
      <ul>
        {data.allMarkdownRemark.edges.map( post => (
          <li key={post.node.id}>
            <Link to={post.node.frontmatter.path} >{post.node.frontmatter.title }</Link>
          </li>
          ))}
      </ul>
    </div>



    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export const pageQuery = graphql`
query BlogSubPageQuery {
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



export default BlogPage

