import React from "react";
import Styles from "./index.module.scss";
const SettingItem = ({ icon, itemName }) => {
  return (
    <div className={Styles.settingArea}>
      <span>{icon}</span>
      <p>{itemName}</p>
    </div>
  );
};

export default SettingItem;
