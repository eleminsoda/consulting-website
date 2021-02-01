import React from "react";
import { createUseStyles } from "react-jss";

import { headerStyle, sectionStyle, navStyle } from "../styles/headerStyle.js";

const logoSrc = "/assets/logo.jpg";
const styles = {
  headerStyle,
  sectionStyle,
  navStyle,
  headerTextStyle: {
    color: "white",
  },
};

export function Header(props) {
  const useStyles = createUseStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.headerStyle}>
      <section className={classes.sectionStyle}>
        <img src={logoSrc} height="120px" alt="彻隆网站" />
        <nav className={classes.navStyle}>
          <ul>
            <li>
              <a href="">首页</a>
            </li>
            <li>
              <a href="">关于我们</a>
            </li>
            <li>
              <a href="">咨询服务</a>
              <ul>
                <li>
                  <a href="">企业管理咨询</a>
                </li>
                <li>
                  <a href="">财务税务咨询</a>
                </li>
                <li>
                  <a href="">财务税务咨询</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">联系我们</a>
            </li>
            <li>
              <a href="">English</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
