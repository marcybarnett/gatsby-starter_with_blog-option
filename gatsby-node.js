/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


// eslint-disable-next-line no-undef
const path = require('path');

// exports.createPages = ({boundActionCreators, graphql}) => { // depricated in v2
// eslint-disable-next-line no-undef
exports.createPages = ({actions, graphql}) => {


  const {createPage} = actions;

  const postTemplate = path.resolve('src/templates/post.js');

  // needed the sort here for the next/previous links to work correctly
  return graphql(`{
    allMarkdownRemark (
      sort: {order: ASC, fields: [frontmatter___date]}
    ){
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
            published
          }
        }
      }
    }
  }`).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    const posts = res.data.allMarkdownRemark.edges;

    res.data.allMarkdownRemark.edges.forEach(({node}, index) => {

      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          pathSlug: node.frontmatter.path,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node
        }
      })
    })
    
  })
}
