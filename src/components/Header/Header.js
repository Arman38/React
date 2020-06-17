import React from "react";
import classes from "./header.module.scss";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header className={`${classes.Header}`}>
      <div className='container'>
        <div className={classes.LogoAndNav}>
          <Logo />
          <NavBar />
        </div>
        </div>
    </header>
  );
};

export default Header;
