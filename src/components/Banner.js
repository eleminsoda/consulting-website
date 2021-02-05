import React from "react";
import { createUseStyles } from "react-jss";

import { bannerStyle } from "../styles/bannerStyle";

export function Banner({ index, imgSrc, text, subText }) {
  const useStyles = createUseStyles(bannerStyle);
  const classes = useStyles();

  const flexDirection = index % 2 === 0 ? "row" : "row-reverse";
  const bgColor = index % 2 === 0 ? "white" : "#f5f5f5";
  const maskPos = index % 2 === 0 ? "left" : "right";

  return (
    <div
      className={classes.container}
      style={{ flexDirection: flexDirection, backgroundColor: bgColor }}
    >
      <img className={classes.image} src={imgSrc} height="400px" alt=""></img>
      <div className={classes.textArea}>
        <div style={{ [maskPos]: "-300px" }} className={classes.mask}>
          <p className={classes.subText}>{subText}</p>
        </div>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
}
