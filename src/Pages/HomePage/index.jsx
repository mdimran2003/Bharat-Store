import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import WelcomePage from "../WelcomePage";
import ProfilePage from "../ProfilePage";
import axios from "axios";
const HomePage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showVerify, setShowVerify] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [inputData, setInputData] = useState({
    mobile_number: "",
  });
  const [mobileOTP, setMobileOTP] = useState({
    mobile_otp: "",
    mobile_number: "",
    type: "",
    registration_token: "",
  });
  let mobile_number = inputData;
  let mobile_otp = mobileOTP;

  const onOTPfield = (e) => {
    let mobile_otp = e.target.value;
    let newOtpData = {
      ...mobileOTP,
    };
    newOtpData = {
      mobile_otp: mobile_otp,
      mobile_number: mobile_number,
      type: "web",
      registration_token: "",
    };
    // newOtpData["mobile_otp"] = mobile_otp;
    setMobileOTP(newOtpData);
  };
  const onInputField = (event) => {
    let phone = event.target.value;
    let newInputData = {
      ...inputData,
    };
    newInputData["mobile_number"] = phone;
    setInputData(newInputData);
  };

  const onSubmitRequest = async () => {
    await axios.post(" https://storebh.bhaaraterp.com/api/login/", mobile_number).then((res) => {
      console.log(res);
    });
    setShowLogin(false);
    setShowVerify(true);
  };
  const onSubmitOtp = async () => {
    await axios.post(" https://storebh.bhaaraterp.com/api/verify-login-otp/", mobile_otp).then((res) => {
      console.log(res);
    });
    setShowVerify(false);
    setShowProfile(true);
  };
  return (
    <div className={Styles.pageArea}>
      <div className={Styles.pageArea__pages}>
        {showLogin && (
          <WelcomePage
            value={inputData.mobile_number}
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
            value={inputData.mobile_otp}
            type="text"
            btnText="Verify OTP"
            btnClickFunction={onSubmitOtp}
            lable="Enter OTP"
            message="We have sent a code to your mobile number"
            tittle="Email Verification"
            onChange={onOTPfield}
          />
        )}
      </div>
      {showProfile && <ProfilePage />}
    </div>
  );
};

export default HomePage;
