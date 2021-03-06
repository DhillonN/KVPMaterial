/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path= require(`path`)
exports.createPages=({graphql, actions})=>{
    const {createPage}=actions
    return graphql(`{
    allNodeProjects {
        edges {
          node {
            id
            title
          }
        }
      }
    }`).then(result=>{
        result.data.allNodeProjects.edges.forEach(({node}) => {
            createPage({
                path:node.title,
                component:path.resolve('./src/templates/projectpages.js'),
                context:{
                    id:node.id
                },
            })
        })

    })
}













