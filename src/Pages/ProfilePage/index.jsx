import React, { useState } from "react";
import Styles from "./index.module.scss";
import SettingItem from "../../Component/SettingItem";
import Tittle from "../../Component/Tittle";
import InputField from "../../Component/InputField/index";
import CommonBtn from "../../Component/CommonBtn";
import userImg from "../../Assets/userImg.avif";
import Logo from "../../Component/Logo";
const ProfilePage = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
    mobile: "",
    gstNo: "",
    bank: "",
    ifce: "",
  });
  const onInputfield = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    let newData = {
      ...inputValue,
    };
    console.log(newData);
    newData[id] = value;
    setInputValue(newData);
  };
  const onSaveChangeInformation = () => {
    console.log(inputValue);
  };
  return (
    <>
      <div className={Styles.profilArea}>
        <div className={Styles.profilArea__navbar}>
          <div className={Styles.profilArea__navbar__logo}>
            <Logo />
          </div>
        </div>
        <div className={Styles.profilArea__userDetail}>
          <div className={Styles.profilArea__userDetail__profileSetting}>
            <div className={Styles.profilArea__userDetail__profileSetting__hedding}>
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <p>Profile Setting</p>
            </div>
            <SettingItem icon={<i className="fa-solid fa-share-nodes"></i>} itemName="Referral & Earn" />
            <SettingItem icon={<i className="fa-solid fa-bag-shopping"></i>} itemName="Orders" />
            <SettingItem icon={<i className="fa-solid fa-file-lines"></i>} itemName="Invoicies" />
            <SettingItem icon={<i className="fa-solid fa-heart"></i>} itemName="Wishlist" />
            <SettingItem icon={<i className="fa-solid fa-location-dot"></i>} itemName="Addresses" />
            <SettingItem icon={<i className="fa-solid fa-bell"></i>} itemName="Notification" />
            <SettingItem icon={<i className="fa-solid fa-lock"></i>} itemName="LogOut" />
          </div>
          <div className={Styles.profilArea__userDetail__profile}>
            <Tittle tittle="Personal Information" />
            <div className={Styles.profilArea__userDetail__profile__picture}>
              <img src={userImg} alt="error" />
            </div>
            <div className={Styles.profilArea__userDetail__profile__profileData}>
              <div>
                <InputField lable="First Name" type="text" defaultValue={inputValue.name} id="name" onChange={onInputfield} />
                <InputField lable="Email" type="email" defaultValue={inputValue.email} id="email" onChange={onInputfield} />
                <InputField lable="Date of Birth" type="date" defaultValue={inputValue.dateOfBirth} id="dob" onChange={onInputfield} />
                <InputField lable="GST No." type="text" defaultValue={inputValue.gstNo} id="gstNo" onChange={onInputfield} />
                <InputField lable="IFSC" type="text" defaultValue={inputValue.ifce} id="ifce" onChange={onInputfield} />
              </div>
              <div>
                <InputField lable="Last Name" type="text" defaultValue={inputValue.lastName} id="lastname" onChange={onInputfield} />
                <InputField lable="Gender" type="text" defaultValue={inputValue.gender} id="gender" onChange={onInputfield} />
                <InputField lable="Mobile Number" type="number" defaultValue={inputValue.mobileNo} id="mobile" onChange={onInputfield} />
                <InputField
                  lable="Bank Account Number"
                  type="number"
                  defaultValue={inputValue.bankAccountNo}
                  id="bank"
                  onChange={onInputfield}
                />
              </div>
            </div>
            <div className={Styles.profilArea__userDetail__profile__button}>
              <CommonBtn text="Saves Changes" onSubmitValue={onSaveChangeInformation} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
