import React from "react";
import Styles from "./index.module.scss";
import logo from "../../Assets/logo.png";
const Logo = () => {
  return (
    <div className={Styles.logoarea}>
      <div className={Styles.logoarea__logo}>
        <img src={logo} alt="error" />
      </div>
      <div className={Styles.logoarea__compnyName}>
        <h3>BHARAT STORE</h3>
        <p>Your new shopping destination</p>
      </div>
    </div>
  );
};

export default Logo;
