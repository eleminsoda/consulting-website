import React from "react";
import { createUseStyles } from "react-jss";

import footerStyle from "../styles/footerStyle";

export function Footer(props) {
  const useStyles = createUseStyles(footerStyle);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <p className={classes.text}>联系我们</p>
        <ul className={classes.contact}>
          <li>邮箱：info@chievelong.com</li>
          <li>电话：021-5496 1128</li>
          <li>地址：中国（上海）自由贸易试验区马吉路2号1101室</li>
        </ul>
      </div>
    </div>
  );
}
