const bannerStyle = {
  container: {
    boxSizing: "border-box",

    width: "100vw",
    height: "620px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "50px 100px",
  },

  image: {
    margin: "0 80px",
  },

  textArea: {
    height: "400px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },

  text: {
    fontSize: "28px",
    width: "340px",
    textAlign: "center",
    whiteSpace: "pre-wrap",

    "&:hover": {
      fontSize: "34px",
    },
  },

  mask: {
    marginLeft: "50px",
    width: "560px",
    height: "100px",
    background: "rgba(0,0,0,0.7)",
    transform: "skew(-30deg)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "0",
  },

  subText: {
    transform: "skew(30deg)",
    color: "white",
    textAlign: 'center',
    
  },
};

export { bannerStyle };
