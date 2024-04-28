import React from "react";
import SearchBar from "./SearchBar";
import logo from "../assests/LOGO.png";
import FeedBack from "./FeedBack";
import styles from "./NavBar.module.css";
import { useTheme } from '@mui/material/styles';

function NavBar() {
  const muiTheme = useTheme();
  return (
    <div className={styles.NavBarFlex} style={{ backgroundColor: muiTheme.palette.primary.main }}>
      <div className={styles.LogoContainer}>
        <img src={logo} alt="logo" className={styles.Logo} />
      </div>
      <SearchBar />
      <FeedBack />
    </div>
  );
}

export default NavBar;
