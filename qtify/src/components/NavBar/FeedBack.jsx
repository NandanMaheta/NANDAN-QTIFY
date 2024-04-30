
import React from "react";
import { useTheme } from '@mui/material/styles'; 

import styles from "./NavBar.module.css";
import theme from "../../components/ThemeProvider"; 

function FeedBack() {
    const muiTheme = useTheme(); // Access theme object using useTheme hook
    return (
        <button className={styles.FeedBack} style={{ backgroundColor: muiTheme.palette.primary.dark, color: muiTheme.palette.primary.main , fontFamily: 'Poppins, sans-serif'}}>
            Give Feedback
        </button>
    );
}

export default FeedBack;
