import {
  title,
  cardTitle,
} from "../../assets/jss/material-kit-react.jsx"
import imageStyle from "../../assets/jss/material-kit-react/imagesStyles"
const GalleryStyle = {
  galleryGrid: {
    zIndex: "12",
    color: "#FFFFFF",

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
  galleryImage: {
    width: "100%",
   
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
  galleryGrid__item: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding:"10px",
    "@media (min-width: 576px)": {
        width: "50%",
      },
      "@media (min-width: 768px)": {
        width: "calc(100% / 3)",
      },
      "@media (min-width: 992px)": {
        width: "calc(100% / 4)",
      },
      "@media (min-width: 1200px)": {
        width: "calc(100% / 4)",
      }
  },
  mainRaised: {
    marginTop: "100px",
    borderRadius: "6px",
    paddingTop: "50px",
    height: "100vh",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#999",
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  Link: {
    textDecoration: "none",
    color: "black",
  },
  lightBoxModal:{
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  },
  
}

export default GalleryStyle
