import React from "react"
import Parallax from "../Parallax/Parallax"
import Button from "../CustomButtons/Button"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from "./landingPageStyles"
import Projects from '../LandingPage/sections/projects/projects'
import Testimonials from "./sections/Testimonials/Testimonials";
import AboutPage from './sections/About/About'
class LandingPage extends React.Component {
  render() {
    const fields = this.props.pagedata
    const cardFields = this.props.cardData
    const testimonials = this.props.testimonials
    const AboutData= this.props.about
    const { classes } = this.props
   
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
         <Testimonials testimonials={testimonials}></Testimonials>
        </div>
        <Parallax spacer />
        <div className={classes.section}>
         <AboutPage aboutData={AboutData}></AboutPage>
        </div>
      </div>
    )
  }
}

export default withStyles(PageStyles)(LandingPage)
