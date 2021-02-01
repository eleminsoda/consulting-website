import React from "react";
import { createUseStyles } from "react-jss";

import { bannerStyle } from "../styles/bannerStyle";

const styles = {
  bannerStyle,
};

export function Banner({ index, imgSrc, text }) {
  const useStyles = createUseStyles(styles);
  const classes = useStyles();

  const flexDirection = index % 2 === 0 ? "row" : "row-reverse";
  const bgColor = index % 2 === 0 ? "white" : "#f5f5f5";

  return (
    <div
      className={classes.bannerStyle}
      style={{ flexDirection: flexDirection, backgroundColor: bgColor }}
    >
      <img src={imgSrc} height="400px" alt=""></img>
      <p>{text}</p>
    </div>
  );
}
