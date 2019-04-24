import {
    container,
    title,
    karaenaGold,
    lightKaraenaGold
  } from "../../../../assets/jss/material-kit-react.jsx"
  import imageStyle from "../../../../assets/jss/material-kit-react/imagesStyles"
  const AboutStyle = {
    container: {
      zIndex: "12",
      color: "#FFFFFF",
      ...container,
      flexDirection:"row",
      flexWrap:"nowrap",
      alignItems:"flex-start"
    },
    title:{
      ...title,
      display:"block",
      width:"100%",
      textAlign:"center",
      color:karaenaGold,
      padding:"3rem",
    },
    ...imageStyle,
    imgRaised:{
height:"100%",
width:"100%"
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
      maxWidth:"100%",
      width:"50vw"
    },
    description: {
      color: "#999",
      textAlign:"justify"
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
  
  export default AboutStyle
  