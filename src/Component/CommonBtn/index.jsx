import React from "react";
import Styles from "./index.module.scss";
const CommonBtn = ({ text, onSubmitValue }) => {
  return (
    <div className={Styles.btnArea}>
      <button onClick={onSubmitValue}>{text}</button>
    </div>
  );
};

export default CommonBtn;
