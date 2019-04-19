import React from "react"
import Parallax from "./Parallax/Parallax"
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    cssRoot: {
      color: theme.palette.getContrastText(purple[700]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
    bootstrapRoot: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  });
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    typography: {
      useNextVariants: true,
    },
  });
  
class LandingPage extends React.Component {
  render() {
    console.log(this.props)
    const fields = this.props.pagedata
    const {classes}=this.props
    return (
      <div>
        <Parallax image={fields.relationships.field_front_photo.localFile.url}>
         <div className="landing-section">
          <h1>{fields.title}</h1>
          <span dangerouslySetInnerHTML={{ __html: fields.body.processed }} />
          </div>
          <Button variant="contained" color="primary" className={classes.cssRoot} >Let's Start</Button>
        </Parallax>
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage)
