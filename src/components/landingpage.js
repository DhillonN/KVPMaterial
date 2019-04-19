import React from "react"
import Parallax from "./Parallax/Parallax"
import Button from '../components/CustomButtons/Button'


  
class LandingPage extends React.Component {
  render() {
    console.log(this.props)
    const fields = this.props.pagedata
    return (
      <div>
        <Parallax image={fields.relationships.field_front_photo.localFile.url}>
         <div className="landing-section">
          <h1>{fields.title}</h1>
          <span dangerouslySetInnerHTML={{ __html: fields.body.processed }} />
          </div>
          <Button  color="primary">Let's Start</Button>
        </Parallax>
      </div>
    )
  }
}

export default LandingPage
