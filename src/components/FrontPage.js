import React from "react";
import { createUseStyles } from "react-jss";
import { frontPageStyle } from "../styles/frontPageStyle";

export function FrontPage(props) {
  const useStyles = createUseStyles(frontPageStyle);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.mask}>
        <p className={classes.title}>
          我们的使命<br></br>"为伙伴创造价值"
        </p>
      </div>
    </div>
  );
}
