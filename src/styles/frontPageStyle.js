const frontPageStyle = {
  container: {
    width: "100vw",
    height: "calc(100vh - 120px)",
    backgroundImage: "url(/assets/frontPageBg.jpg)",
    backgroundSize: "cover",
  },

  mask: {
    background: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: "76px",
    fontWeight: 'bolder',
  },
};

export { frontPageStyle };
