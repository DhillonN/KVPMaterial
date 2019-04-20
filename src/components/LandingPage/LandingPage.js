import React from "react"
import propTypes from 'prop-types'
import Parallax from "../Parallax/Parallax"
import Button from '../CustomButtons/Button'
import classNames from 'classnames'
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from './landingPageStyles'
import Card from '../Card/Card'
import CardBody from '../Card/CardBody'
import Image from 'gatsby-image'
import Grid from '../Grid/GridContainer'
import GridItems from '../Grid/GridItem'
  
class LandingPage extends React.Component {
  render() {
    const fields = this.props.pagedata
    const cardFields=this.props.cardData
    const { classes,children } = this.props
    return (
      <div>
        <Parallax image={fields.relationships.field_front_photo.localFile.url}>
         <div className={"landing-section"}>
          <h1>{fields.title}</h1>
          <span dangerouslySetInnerHTML={{ __html: fields.body.processed }} />
          <Button  color="primary">Let's Start</Button>
          </div>
          
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
<Grid>
        {cardFields.edges.map(({node})=>
        <GridItems xs={12} sm={12} md={6}>
        <Card square>
        <Image fluid={node.relationships.field_photo.localFile.childImageSharp.fluid} alt="" />
        <CardBody>
          <div className="project-description">
          <h3>{node.title}</h3>
          <h5>{node.field_subtext}</h5>
          </div>
        </CardBody>
        </Card>
        </GridItems>
        )}
        </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(PageStyles)(LandingPage)
