/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages = ({ actions: { createPage } }) => {
//   createPage({
//     path: "/no-data/",
//     component: require.resolve("./src/templates/no-data.js"),
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = require.resolve("./src/templates/home.js")

  createPage({
    path: `/en`,
    component: template,
    context: {
      lang: "en-us",
    },
  })

  createPage({
    path: `/`,
    component: template,
    context: {
      lang: "de-de",
    },
  })
}
