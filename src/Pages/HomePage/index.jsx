import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import WelcomePage from "../WelcomePage";
import ProfilePage from "../ProfilePage";

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showVerify, setShowVerify] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [inputData, setInputData] = useState(false);

  // const onSubmitRequest = () => {
  //   setShowLogin(false);
  //   setShowVerify(true);
  // };
  const onSubmitOtp = () => {
    setShowVerify(false);
    setShowProfile(true);
  };
  const onInputField = (event) => {
    setInputData(event.target.value);
  };

  const onSubmitRequest = async () => {
    let mobile_number = inputData;
    const apiData = await fetch(`https://storebh.bhaaraterp.com/api/login/${mobile_number}`, {
      method: "POST",
      "Content-Type": "application/json",
    });
    const result = apiData.json();
    console.log(result);
  };
  // apiData
  //   .then((resolve) => {
  //     console.log(resolve);
  //   })
  //   .catch((reject) => {
  //     console.log(reject);
  //   });
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className={Styles.pageArea}>
      <div className={Styles.pageArea__pages}>
        {showLogin && (
          <WelcomePage
            type="number"
            btnText="Send OTP"
            btnClickFunction={onSubmitRequest}
            lable="Mobile Number"
            message="Enter you mobile number to start shopping."
            tittle="Welcome"
            onChange={onInputField}
          />
        )}
        {showVerify && (
          <WelcomePage
            type="text"
            btnText="Verify OTP"
            btnClickFunction={onSubmitOtp}
            lable="Enter OTP"
            message="We have sent a code to your mobile number"
            tittle="Email Verification"
            onChange={onInputField}
          />
        )}
      </div>
      {showProfile && <ProfilePage />}
    </div>
  );
};

export default HomePage;
