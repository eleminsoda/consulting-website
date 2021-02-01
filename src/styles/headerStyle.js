const headerStyle = {
  // opacity: "0.7",
  // position: "fixed",
  // top: 0,
  // left: 0,
  fontSize: "14px",
  backgroundColor: "white",
  width: "100%",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  zIndex: "99",
};

const sectionStyle = {
  minWidth: "320px",
  maxWidth: "960px",
  height: "100%",
  display: "flex",
  flex: "1 1 auto",
  justifyContent: "space-between",
  alignItems: "center",
};

const navStyle = {
  flex: "1 1 auto",
  height: "60px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",

  "& ul": {
    padding: 0,
  },

  "& > ul": {
    display: "flex",
    height: "100%",
    flexDirection: "row",
    position: "relative",

    "& li": {
      display: "flex",
      listStyle: "none",
      justifyContent: "center",
      alignItems: "center",
      overflow: "visible",
    },

    "& > li": {
      width: "80px",
      height: "100%",
      padding: "0 10px",
      position: "relative",

      "& a": {
        color: "black",
        textDecoration: "none",
      },

      "& ul": {
        display: "none",
        flexDirection: "column",
        position: "absolute",
        backgroundColor: "#e9e8e5",
        opacity: 0.8,
        border: "1px solid black",
        top: "65px",
        left: "-10px",
        width: "120px",

        "& li": {
          width: "100%",
          height: "40px",
        },

        // display: "flex",
      },

      "&:after": {
        content: "''",
        position: "absolute",
        bottom: 0,
        left: "10px",

        display: "flex",
        width: "80px",
        height: "",
        border: "1px solid black",
        zIndex: "99",
      },

      "&:hover": {
        // backgroundColor: "#a1a09a",
      },

      "&:hover ul": {
        display: "flex",
      },
    },
  },
};

export { headerStyle, sectionStyle, navStyle };
