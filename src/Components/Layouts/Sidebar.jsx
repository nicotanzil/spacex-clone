import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import spotifyLogo from "../../assets/spotify-logo.png";

const Sidebar = (props) => {
  const [sidebarBtnClicked, setsidebarBtnClicked] = useState(false);

  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector("bx-search");

  const onSidebarBtnClicked = () => {
    setsidebarBtnClicked((prevSidebarBtnClicked) => !prevSidebarBtnClicked);
  };

  return (
    <div
      className={
        sidebarBtnClicked ? `${styles.sidebar}` : `${styles.sidebar} active`
      }
    >
      <div className={styles.logo_content}>
        <div className={styles.logo}>
          <img src={spotifyLogo} alt="Spotify Logo" />
          <div className={styles.logo_name}>Spotify</div>
        </div>
        <i class="bx bx-menu" id="btn" onClick={onSidebarBtnClicked}></i>
      </div>
      <ul className={styles.nav_list}>
        <li>
          <a href="#">
            <i class="bx bxs-dashboard"></i>
            <span className={styles.links_name}>Dashboard</span>
          </a>
          <span className={styles.tooltip}>Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-search"></i>
            <span className={styles.links_name}>Search</span>
          </a>
          <span className={styles.tooltip}>Search</span>
        </li>
        <li>
          <a href="#">
            <i class="bx bxs-star"></i>
            <span className={styles.links_name}>Favorites</span>
          </a>
          <span className={styles.tooltip}>Favorites</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
