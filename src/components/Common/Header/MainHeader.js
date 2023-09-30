import React from "react"; 
import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>Laptop Galaxy</h1>
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
