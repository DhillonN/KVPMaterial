import {
  container,
  title,
  cardTitle,
} from "../../assets/jss/material-kit-react.jsx"
import imageStyle from "../../assets/jss/material-kit-react/imagesStyles"
const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#00000",
    textDecoration: "none",
  },
  ...imageStyle,
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    height:"100px"
  },
  mainRaised: {
    margin: "0px 0px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
    
  },
  description: {
    color: "#999"
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  Link: {
    textDecoration: "none",
    color: "black",
  },
}

export default landingPageStyle
