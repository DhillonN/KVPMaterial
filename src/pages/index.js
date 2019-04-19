import React from "react"
import { graphql } from "gatsby"
import Landing from '../components/landingpage'
import '../assets/sass/styles.scss'

const IndexPage = ({data}) => (
 <div>
  <Landing pagedata={data.nodeFrontPage}/>
    <h1>{data.nodeFrontPage.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
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