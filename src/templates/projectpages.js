import React from 'react'
import {graphql} from 'gatsby'
import Gallery from '../components/Gallery/Gallery'

export default ({data})=>{
    const project=data.nodeProjects
    return(
     <Gallery galleryData={project}></Gallery>
    )
}

export const query=graphql`
query($id: String!){
nodeProjects (id: {eq: $id}) {
    id
    title
    relationships{
      field_gallery{
        localFile{
          url
          childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              presentationWidth
            }
          }
        }
      }
    }
  }
}`