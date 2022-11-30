import React, { useState } from "react";
import "../Css/Verify_Email_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Verify_Email_page(props) {
  const [OTP_Obj, setOTP_Obj] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const navigate = useNavigate();

  const verifyOTP = `${props.otp}`;
  const otpArray = verifyOTP.split("");
  const onebox = otpArray[0];
  const twobox = otpArray[1];
  const threebox = otpArray[2];
  const fourbox = otpArray[3];
  console.log("split", onebox, twobox, threebox, fourbox);
  const OTPdatabase = props.otp;

  const Otpuser =
    OTP_Obj.first + OTP_Obj.second + OTP_Obj.third + OTP_Obj.fourth;
  function clickToNavigateNewPassWord() {
    if (OTPdatabase == Otpuser) {
      navigate("/New_Password_page");
    }
  }

  // function clickToVerifyPhone() {
  //   console.log("phone verification start");
  //   console.log(props.otp);
  // }
  let digitValidate = function (ele) {
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g, "");
  };
  let tabChange = (val) => {
    let ele = document.querySelectorAll("input");
    console.log("call");
    if (ele[val - 1].value != "") {
      ele[val].focus();
    } else if (ele[val - 1].value == "") {
      ele[val - 2].focus();
    }
  };
  return (
    <>
      <div className="Sign_in_page">
        <div className="back_Arrow">
          <Link to="/Forgot_password_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>
        </div>
        <div className="mainContent">
          <div className="VerifyText">
            <h1>Verify Email</h1>
            <p>
              Code is sent to <span>iammemer@memee.com</span>
            </p>
          </div>
          <div className="form">
            <div class="verfyotp">
              <input
                type="text"
                onInput={() => digitValidate(this)}
                onKeyUp={() => tabChange(1)}
                maxLength="1"
                onChange={(e) => {
                  setOTP_Obj({ ...OTP_Obj, first: e.target.value });
                  console.log(e.target.value);
                }}
                value={OTP_Obj.first}
              />
              <input
                type="text"
                onInput={() => digitValidate(this)}
                onKeyUp={() => tabChange(2)}
                maxLength="1"
                onChange={(e) => {
                  setOTP_Obj({ ...OTP_Obj, second: e.target.value });
                  console.log(e.target.value);
                }}
                value={OTP_Obj.second}
              />
              <input
                type="text"
                onInput={() => digitValidate(this)}
                onKeyUp={() => tabChange(3)}
                maxLength="1"
                onChange={(e) => {
                  setOTP_Obj({ ...OTP_Obj, third: e.target.value });
                  console.log(e.target.value);
                }}
                value={OTP_Obj.third}
              />
              <input
                type="text"
                onInput={() => digitValidate(this)}
                onKeyUp={() => tabChange(4)}
                maxLength="1"
                onChange={(e) => {
                  setOTP_Obj({ ...OTP_Obj, fourth: e.target.value });
                  console.log(e.target.value);
                }}
                value={OTP_Obj.fourth}
              />
            </div>
            <br />
            <div className="resendotp">
              <h6>Didn’t recive code?</h6>
              <h5>Resend OTP</h5>
              <hr id="resendotphr" />
            </div>
            {/* <Link to="/New_Password_page"> */}{" "}
            <button id="Sign_in_button" onClick={clickToNavigateNewPassWord}>
              <span>Verify Phone</span>
            </button>{" "}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
