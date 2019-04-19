import React from "react"
import { graphql } from "gatsby"
import Landing from '../components/landingpage'
import Layout from '../components/layout'
import '../assets/sass/styles.scss'

const IndexPage = ({data}) => (
 <div>
<Layout >
  <Landing pagedata={data.nodeFrontPage}/>
   <div className="main-body">
    <h1>{data.nodeFrontPage.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    </div>
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
}
`