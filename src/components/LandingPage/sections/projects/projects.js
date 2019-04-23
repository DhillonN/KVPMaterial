import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Card from "../../../Card/Card"
import Image from "gatsby-image"
import Grid from "../../../Grid/GridContainer"
import GridItems from "../../../Grid/GridItem"
import projectStyles from "./projectstyles"
import { Link } from "gatsby"
import AOS from "aos"
import { Watch } from "scrollmonitor-react"
import "aos/dist/aos.css"
class projectsSection extends React.Component {
  componentDidMount() {
    this.aos = AOS
    this.aos.init({
      duration: 2000,
    })
  }
  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    const projectsData = this.props.projectsData
    const { classes } = this.props

    return (
      <>
        <h2 className={classNames(classes.projectTitle)}>Recent Projects</h2>
        <Grid>
          {projectsData.edges.map(({ node }, i) => (
            <Link to={`/${node.title}`} key={i}>
              <GridItems
                xs={12}
                sm={12}
                md={6}
                lg={3}
                className={classes.itemGrid}
              >
                <Card
                  data-aos="zoom-in"
                  square
                >
                  <Image
                    fluid={
                      node.relationships.field_photo.localFile.childImageSharp
                        .fluid
                    }
                    alt={node.title}
                    className={classes.imgRaised}
                  />
                  <div className={classes.description}>
                    <h3 className={classes.title}>{node.title}</h3>
                    <h4 className={classes.subtitle}>{node.field_subtext}</h4>
                  </div>
                </Card>
              </GridItems>
            </Link>
          ))}
        </Grid>
      </>
    )
  }
}
export default Watch(withStyles(projectStyles)(projectsSection))
