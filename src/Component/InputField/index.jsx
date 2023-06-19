import React from "react";
import Styles from "./index.module.scss";
const InputFeild = ({ lable, type, onChange, value, id }) => {
  return (
    <div className={Styles.fieldArea}>
      <label htmlFor="phone">{lable}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default InputFeild;
