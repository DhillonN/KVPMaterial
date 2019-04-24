import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Image from "gatsby-image"
import PageStyles from "./AboutStyles"

import Grid from "../../../Grid/GridContainer"
import GridItem from "../../../Grid/GridItem"
class AboutPage extends React.Component {
  render() {
    const about = this.props.aboutData
    const { classes } = this.props

    return (
      <div>
        <h2 className={classes.title}>{about.field_about_title}</h2>
        <Grid className={classes.container}>
          <GridItem className={classes.itemGrid}>
            <Image
              className={classes.imgRaised}
              fluid={
                about.relationships.field_about_photo.localFile.childImageSharp
                  .fluid
              }
              alt={about.title}
            />
          </GridItem>
          <GridItem>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: about.body.processed }}
            />
          </GridItem>
          <h4>{}</h4>
        </Grid>
      </div>
    )
  }
}
export default withStyles(PageStyles)(AboutPage)
