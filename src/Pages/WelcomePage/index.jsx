import React from "react";
import Styles from "./index.module.scss";
import BigCard from "../../Component/BigCard";
import CommonBtn from "../../Component/CommonBtn";
import InputFeild from "../../Component/InputField";
import Msg from "../../Component/Msg";
import Tittle from "../../Component/Tittle";
import Logo from "../../Component/Logo";
const WelcomePage = ({ btnText, btnClickFunction, lable, message, tittle, type, onChange, value }) => {
  return (
    <div className={Styles.welcomePageArea}>
      <div className={Styles.welcomePageArea__bigCardImg}>
        <BigCard />
      </div>
      <div className={Styles.welcomePageArea__detailArea}>
        <div className={Styles.welcomePageArea__detailArea__logo}>
          <Logo />
        </div>
        <div className={Styles.welcomePageArea__detailArea__tittle}>
          <Tittle tittle={tittle} />
        </div>
        <div className={Styles.welcomePageArea__detailArea__massege}>
          <Msg message={message} />
        </div>
        <div className={Styles.welcomePageArea__detailArea__inputArea}>
          <InputFeild lable={lable} type={type} onChange={onChange} value={value} />
        </div>
        <div className={Styles.welcomePageArea__detailArea__btnArea}>
          <CommonBtn text={btnText} onSubmitValue={btnClickFunction} />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
