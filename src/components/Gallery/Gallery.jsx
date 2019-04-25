import React from "react"
import Image from "gatsby-image"
import Layout from "../layout"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import GalleryStyles from "./GalleryStyles"
import Masonry from "react-masonry-component"
import LightBox from "@material-ui/core/Dialog"
import Button from "../CustomButtons/Button"
import DialogContent from "@material-ui/core/DialogContent"
import withMobileDialog from "@material-ui/core/withMobileDialog"
import ActionButtons from "@material-ui/core/DialogActions"
import NonStretchedImage from '../Image/Image'
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    width: "100%",
    maxWidth: "80vw",
    maxHeight: "80vh",
  },
}


class Gallery extends React.Component {
  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }
  state = {
    showLightbox: false,
    selectedImage: 0,
    isModalOpen: false,
  }

  componentDidMount = () => {
    window.addEventListener("keyup", this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keyup", this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ isModalOpen: true })
    this.setState({
      selectedImage: index,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.isModalOpen) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key

        console.log(this.props)
        if (
          this.state.selectedImage <
          this.props.galleryData.relationships.field_gallery.length - 1
        ) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ isModalOpen: false })
      }
    }
  }
  render() {
    const { selectedImage } = this.state
    const projectData = this.props.galleryData
    const { classes } = this.props
    return (
      <Layout>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <h1 className={classes.title}>{projectData.title}</h1>
          <Masonry className={classes.galleryGrid}>
            {projectData.relationships.field_gallery.map(({ localFile }, i) => (
              <a
                key={i}
                href={localFile.childImageSharp.fluid.src}
                onClick={e => this.handleClick(e, i)}
                className={classes.galleryGrid__item}
              >
                <Image
                  fluid={localFile.childImageSharp.fluid}
                  className={classNames(
                    classes.galleryImage,
                    classes.imgRaised
                  )}
                />
              </a>
            ))}
          </Masonry>
          <LightBox
            fullWidth={true}
            maxWidth="lg"
            open={this.state.isModalOpen}
            onClose={this.handleModalClose}
            onKeyUp={e => this.handleKeyUp(e)}
          >
            <DialogContent>
            
            <NonStretchedImage
                fluid={
                  projectData.relationships.field_gallery[selectedImage]
                    .localFile.childImageSharp.fluid
                }
              />
              <ActionButtons>
                <Button color="primary" onClick={this.closeModal}>Close</Button>

                <Button color="primary" onClick={this.goBack} disabled={selectedImage === 0}>
                  Previous
                </Button>
                <Button color="primary"
                  onClick={this.goForward}
                  disabled={
                    selectedImage ===
                    projectData.relationships.field_gallery.length - 1
                  }
                >
                  Next
                </Button>
              </ActionButtons>
            </DialogContent>
          </LightBox>
        </div>
      </Layout>
    )
  }
}
export default withStyles(GalleryStyles)(Gallery)
