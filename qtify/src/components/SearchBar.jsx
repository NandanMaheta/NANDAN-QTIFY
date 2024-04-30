import React from "react";
import SearchBtn from "./SeachButton";
import styles from "./NavBar.module.css"; // Assuming you have a CSS module file for styling
import {Button} from "@mui/material"

function SearchBar() {
  return (
    <div className={styles.SearchBarContainer}>
      <input
        className={styles.SearchInput}
        type="text"
        placeholder="Search an album of your choice"
      />
      <div className={styles.VerticalDivider}></div>
      <Button className={styles.SearchBtnContainer}>
        <SearchBtn />
      </Button>
    </div>
  );
}

export default SearchBar;
