import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from "./AboutStyles"

import Grid from "../../../Grid/GridContainer"

class AboutPage extends React.Component {
  render() {
    const about = this.props.aboutData
    const { classes } = this.props

    return (
      <div className={classNames(classes.main, classes.mainRaised)}>
        <h2 className={classes.title}>About Karaena</h2>
        <Grid>
          <h4>{about.field_about_title}</h4>
        </Grid>
      </div>
    )
  }
}
export default withStyles(PageStyles)(AboutPage)
