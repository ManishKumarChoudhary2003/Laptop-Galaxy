import React from "react";
import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";
import logoImage from "../../../assets/logo.jpg";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>
        <img src={logoImage} alt="Loading..." />
        Laptop Galaxy
      </h1>
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
