import React, { useState } from "react";
import "../Css/Forgot_password_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Verify_Email_page from "./Verify_Email_page";

export default function Forgot_password_page() {
  const [verification, setVerification] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();

  function clickToForgetPassword() {
    var data = JSON.stringify({
      email: email,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_EDIT_PROFILE_API_KEY}/send-email`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      // .then((response) => response.json())
      .then((response) => {
        console.log("***---***", response.data.data.code);
        setOTP(response.data.data.code);
        if (response.data.status == 200) {
          setVerification(true);
          //navigate("/Verify_Email_page");
        } else {
          console.log("invalid email**");
        }
      })
      // .then(function (response) {
      //   setError(response.data.message);
      //   // console.log(JSON.stringify(response.data));
      //   console.log("++++", response);
      //   if (response.data.status == 200) {
      //     navigate("/Verify_Email_page");
      //   } else {
      //     console.log("invalid email**");
      //   }
      // })
      .catch(function (error) {
        console.log("errr", error);
        setError(error.response.data.message);
      });
  }
  return (
    <>
      {verification ? (
        <Verify_Email_page otp={OTP} />
      ) : (
        <div className="Sign_in_page">
          <div className="back_Arrow">
            <Link to="/Sign_in_page">
              {" "}
              <img src={Back_Arrow}></img>{" "}
            </Link>
          </div>
          <div className="mainContent">
            <div className="ForgotPasswordText">
              <h1>Forgot Password</h1>
              <p>You’ll receive 04 digit code to verify email.</p>
            </div>
            <div className="form">
              <div class="yourEmail">
                <h5>ENTER EMAIL</h5>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                />
              </div>
              <br />
              <div style={{ color: "red" }}>{error}</div>
              <button
                id="Sign_in_button"
                type="submit"
                onClick={clickToForgetPassword}
              >
                <span>Continue</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
