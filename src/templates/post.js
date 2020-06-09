/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'

export default function Template ({data}) {
  const {markdownRemark: post} = data;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML = {{__html: post.html}} />
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
      }
    }
  }
`
