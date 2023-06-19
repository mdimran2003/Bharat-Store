import React from "react";
import Styles from "./index.module.scss";
const Msg = ({ message }) => {
  return (
    <div className={Styles.msgArea}>
      <p>{message}</p>
    </div>
  );
};

export default Msg;
