import React from "react"
import Parallax from "../Parallax/Parallax"
import Button from "../CustomButtons/Button"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from "./landingPageStyles"
import Card from "../Card/Card"
import CardBody from "../Card/CardBody"
import Grid from "../Grid/GridContainer"
import GridItems from "../Grid/GridItem"
import FlipCard from "../Card/FlipCard"
import Projects from '../LandingPage/sections/projects/projects'
class LandingPage extends React.Component {
  render() {
    const fields = this.props.pagedata
    const cardFields = this.props.cardData
    const testimonials = this.props.testimonials
    const AboutData= this.props.about
    const { classes, children } = this.props
    const imageClasses = classNames(
      classes.imgRaised,

      classes.imgFluid
    )
    return (
      <div>
        <Parallax image={fields.relationships.field_front_photo.localFile.url}>
          <div className={"landing-section"}>
            <h1>{fields.title}</h1>
            <span dangerouslySetInnerHTML={{ __html: fields.body.processed }} />
            <Button color="primary">Let's Start</Button>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
         <Projects projectsData={cardFields}></Projects>
        </div>
        <Parallax spacer />
        <div className={classes.section}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <h2 className={classes.title}>What Our Clients Say</h2>
            <Grid>
              {testimonials.edges.map(({ node }) => (
                <GridItems xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItems
                      xs={12}
                      sm={12}
                      md={6}
                      className={classes.itemGrid}
                    >
                      <img
                        src={node.relationships.field_image.localFile.url}
                        alt={node.title}
                        className={imageClasses}
                      />
                    </GridItems>
                    <h4 className={classes.cardTitle}>{node.title}</h4>
                    <small className={classes.smallTitle}>
                      {node.field_position}
                    </small>
                    <a className={classes.Link} href={node.field_webpage}>
                      {node.field_organisation}
                    </a>
                    <CardBody testimonials>
                      <span
                        className={classes.description}
                        dangerouslySetInnerHTML={{
                          __html: node.body.processed,
                        }}
                      />
                    </CardBody>
                  </Card>
                </GridItems>
              ))}
            </Grid><FlipCard  about={AboutData}/>
          </div>
          
        </div>
      </div>
    )
  }
}

export default withStyles(PageStyles)(LandingPage)
