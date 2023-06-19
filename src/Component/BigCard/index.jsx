import React from "react";
import Styles from "./index.module.scss";
import image from "../../Assets/bigImg.png";
const BigCard = () => {
  return (
    <div className={Styles.cardArea}>
      <img src={image} alt="error" />
    </div>
  );
};

export default BigCard;
