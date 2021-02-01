import React from "react";
import { createUseStyles } from "react-jss";
import aboutUsStyle from "../styles/aboutUsStyle";

export function AboutUs(props) {
  const useStyles = createUseStyles(aboutUsStyle);
  const classes = useStyles();

  return (
    <div className={classes.aboutUs}>
      <p className={classes.heading}>关于我们</p>
      <p className={classes.text}>
        彻隆咨询以其丰富的企业管理实践和行业研究和培训经验，专注于为中国企业的内部管理、财务税务、投融资和国际战略提供定制化咨询服务。
      </p>
      <p className={classes.text}>
        我们旨在通过创新性战略思维方式，秉承“为合作伙伴创造价值”的核心价值观，以可持续发展为核心，立足本土、放眼全球。从全球实践角度，为企业提供更广范围、更深入的管理建议。
      </p>
    </div>
  );
}
