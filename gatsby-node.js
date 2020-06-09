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

  return graphql(`{
    allMarkdownRemark{
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
    
  })
}
