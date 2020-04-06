exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            published(fromNow: true)
            image
          }
        }
      }
    }
  `).then(news => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: "/news/" + edge.node.id,
        component: path.resolve(`src/templates/newsArticle.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}
