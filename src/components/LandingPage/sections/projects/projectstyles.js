import {
    container,
    title,
    karaenaGold,
    lightKaraenaGold
  } from "../../../../assets/jss/material-kit-react.jsx"
  import imageStyle from "../../../../assets/jss/material-kit-react/imagesStyles"
  const projectStyle = {
    container: {
      zIndex: "12",
      color: "#FFFFFF",
      ...container,
    },
    projectTitle:{
      ...title,
      display:"block",
      width:"100%",
      textAlign:"center",
      color:karaenaGold,
      padding:"3rem",
    },
    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "0px",
      minHeight: "32px",
      color: karaenaGold,
      textDecoration: "none",
    },
    ...imageStyle,
    imgRaised:{
height:"100%"
    },
    subtitle: {
      color:lightKaraenaGold,
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "0px auto 0",
      lineHeight:"0.8px"
    },
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3",
    },
    itemGrid: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth:"100%"
    },
    description: {
      color: "#999",
      textAlign:"center"
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
  
  export default projectStyle
  