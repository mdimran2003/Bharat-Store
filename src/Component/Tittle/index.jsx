import React from "react";
import Styles from "./index.module.scss";
const Tittle = ({ tittle }) => {
  return (
    <div className={Styles.tittleArea}>
      <h2>{tittle}</h2>
    </div>
  );
};

export default Tittle;
