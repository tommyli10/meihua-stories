const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    // grab all the slugs so gatsby knows what routes to generate
    const { data } = await graphql(`
    query MyQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);

    // each project page from all the slugs
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/work/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-template.js'),
            context: { slug: node.frontmatter.slug }
        })
    });
}