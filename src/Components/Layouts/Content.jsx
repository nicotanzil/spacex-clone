import React from "react";
import GetLaunches from "../GetLaunches";
import styles from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={styles.home_content}>
      <div className={styles.text}>Home Content</div>
      <GetLaunches />
    </div>
  );
};

export default Content;
