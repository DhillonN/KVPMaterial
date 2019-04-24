const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardCarousel: {
    overflow: "hidden"
  },
  cardSquare:{
    boxShadow:"none",
    width:"70vw",
    height:"70vw",
    alignText:"center",
    "@media (min-width: 576px)": {
      width: "40vw",
      height: "40vw",
    },
    "@media (min-width: 992px)": {
      width: "30vw",
      height: "30vw",
    },
    },
    cardTestimonials:{
      flexDirection:"row",
      boxShadow:"none"
  },
  cardGallery:{
width:"100%"
  }
};

export default cardStyle;
