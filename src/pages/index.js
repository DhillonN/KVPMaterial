import React from "react"
import { graphql } from "gatsby"
import "../assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
import Landing from "../components/LandingPage/LandingPage"
import Layout from "../components/layout"
import "../assets/sass/styles.scss"

const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <Landing
        pagedata={data.nodeFrontPage}
        cardData={data.allNodeProjects}
        testimonials={data.allNodeTestimonials}
        about={data.nodeAboutPage}
      >
       
      </Landing>
    </Layout>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
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
    allNodeProjects {
      edges {
        node {
          id
          title
          field_subtext
          relationships {
            field_photo {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
    allNodeTestimonials {
      edges {
        node {
          title
          field_webpage
          field_position
          field_organisation
          field_show_on_frontpage
          body {
            processed
          }
          relationships {
            field_image {
              localFile {
                url
              }
            }
          }
        }
      }
    }
    nodeAboutPage {
      id
      field_about_title
      body {
        processed
        summary
      }
      relationships {
        field_about_photo {
          localFile {
            url
          }
        }
      }
    }
  }
`
