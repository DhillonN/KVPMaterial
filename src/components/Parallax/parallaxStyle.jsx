const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "10px",
    border: "0",
    display: "flex",
    alignItems: "flex-end",
    flexFlow:"column",
    justifyContent:"center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  },
  spacer:{
height:"1px",
padding:"1px"
  }
};

export default parallaxStyle;
