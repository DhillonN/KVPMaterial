import React from "react"
import GridContainer from "../Grid/GridContainer"
import GridItem from "../Grid/GridItem"
import Flipcard from "@kennethormandy/react-flipcard"
import Card from "../Card/Card"
import CardBody from "../Card/CardBody"
import Avatar from "@material-ui/core/Avatar"
import "@kennethormandy/react-flipcard/dist/Flipcard.css"
class FlipCardpage extends React.Component {
  state = {
    flipped1: false,
  }

  handleFlipping = id => () => {
    const cardId = `flipped${id}`
    this.setState({ [cardId]: !this.state[cardId] })
  }

  render() {
    const { about } = this.props
    return (
      <GridContainer>
        <GridItem style={{ minHeight: "26rem", width: "25vw" }}>
          <Flipcard
            flipped={this.state.flipped1}
            className="text-center h-100 w-100"
          >
            <Card className="face front">
            

              <Avatar className="mx-auto white" circle>
                <img
                  src={about.relationships.field_about_photo.localFile.url}
                  alt=""
                  className="rounded-circle"
                />
              </Avatar>
              <CardBody>
                <h4 className="font-weight-bold mb-3">Karaena Vincent</h4>
                <p className="font-weight-bold blue-text">
                  Professional Photographer
                </p>
                <p
                  className="rotate-btn text-dark"
                  data-card="card-1"
                  onClick={this.handleFlipping(1)}
                >
                  Click here to rotate
                </p>
              </CardBody>
            </Card>
            <Card className="face back" style={{ height: "400px" }}>
              <CardBody>
                <h4 className="font-weight-bold">About me</h4>

                <span dangerouslySetInnerHTML={{ __html: about.body.processed }}/>
                  <button
                    className="rotate-btn text-dark"
                    data-card="card-1"
                    onClick={this.handleFlipping(1)}
                  >Click here to rotate back
                  </button>
             
              </CardBody>
            </Card>
          </Flipcard>
        </GridItem>
      </GridContainer>
    )
  }
}

export default FlipCardpage
