import React from "react"
import { graphql } from "gatsby"
import Landing from '../components/LandingPage/LandingPage'
import Layout from '../components/layout'
import '../assets/sass/styles.scss'


  
const IndexPage= ({data})=>(
  <div>  
<Layout >
  <Landing pagedata={data.nodeFrontPage} cardData={data.allNodeProjects}>
  <div>
    <h1>{data.nodeFrontPage.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    </div>
    </Landing>

</Layout>
   </div>

)


export default IndexPage

export const query=graphql`
query{
  nodeFrontPage {
    id
    title
    body {
      processed
    }
    relationships {
      field_front_photo {
        localFile {
          url
        }
      }
    }
  }
  allNodeProjects{
    edges{
      node{
        id
        title
        field_subtext
        relationships{
          field_photo {
            id
            localFile {
              childImageSharp{
                fluid(maxWidth:500 ){
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
}
`