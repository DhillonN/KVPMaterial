import {
   
    title,
    karaenaGold,
    lightKaraenaGold,
  } from "../../../../assets/jss/material-kit-react.jsx"
  import imageStyle from "../../../../assets/jss/material-kit-react/imagesStyles"
  const projectStyle = {
    container: {
      zIndex: "12",
      color: "#FFFFFF",
      
      
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
    mainRaised: {
      margin: "0px 0px 0px",
      borderRadius: "6px", 
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    itemGrid: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth:"100%",
      transition:("all ease-in-out 1.2s"),
      '&:hover':{
        transform:"scale(1.1)",
        transition:("ease-in-out 1.2s")
        
      },
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
  