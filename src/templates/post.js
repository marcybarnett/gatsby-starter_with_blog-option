/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby'

export default function Template ({data, pageContext}) {
  // conditional next/previous links
  const {next, prev} = pageContext;

  const {markdownRemark: post} = data;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML = {{__html: post.html}} />

      <ul>
        <li><Link to="/">Go back to the homepage</Link></li>
        <li><Link to="/blog-index/">Go to Blog</Link></li>
        {next && <li><Link to={next.frontmatter.path}>Next</Link></li>}
        {prev && <li><Link to={prev.frontmatter.path}>Previous</Link></li>}
      </ul>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path : String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
        date
        published
      }
    }
  }
`
