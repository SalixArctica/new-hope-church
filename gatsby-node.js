const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const results = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const id = node.id
    createPage({
      path: "/news/" + node.frontmatter.title,
      component: path.resolve(`src/templates/newsArticle.js`),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })
}
