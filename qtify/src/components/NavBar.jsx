import React from "react";
import SearchBar from "./SearchBar";
import logo from "../assests/LOGO.png"
import FeedBack from "./FeedBack";
import styles from "./NavBar.module.css"
import theme from "./ThemeProvider";
import { useTheme } from '@mui/material/styles'; 
function NavBar(){
    const muiTheme = useTheme();
    return(
        <div className={styles.NavBarFlex} style={{ backgroundColor: muiTheme.palette.primary.main, }}>
        <img src={logo} alt="logo"/>
        <SearchBar/>
        <FeedBack/>
        </div>
    )
}
export default NavBar;