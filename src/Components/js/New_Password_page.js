import React, { useState } from "react";
import "../Css/New_Password_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function New_Password_page() {
  const navigate = useNavigate();
  const [NewPassword, setNewPassword] = useState({
    email: "",
    password: "",
    cPassword: "",
  });
  const [showPassword, SetShowPassword] = useState();
  const [show_ConfirmPassword, setShow_ConfirmPassword] = useState();

  const PassHandler = () => {
    SetShowPassword(!showPassword);
  };
  const clickToShowPassword = () => {
    setShow_ConfirmPassword(!show_ConfirmPassword);
  };
  const [password_array, setPassword_array] = useState([]);
  function clickToFetchData() {
    // let resetObj = {
    //   email: NewPassword.email,
    //   password: NewPassword.password,
    //   cPassword: NewPassword.cPassword,
    // };
    const api_url = `${process.env.REACT_APP_EDIT_PROFILE_API_KEY}/reset-password`;
    axios
      .post(
        api_url,

        {
          email: NewPassword.email,
          password: NewPassword.password,
          cPassword: NewPassword.cPassword,
        }
      )
      .then((response) => {
        console.log("data get successfully", response.response);
        setPassword_array(response.data);
        if (response.data.status == 200) {
          console.log(response.data.status);
          navigate("/Sign_in_page");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  return (
    <>
      <div className="Sign_in_page">
        <div className="back_Arrow">
          <Link to="/Verify_Email_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>
        </div>
        <div className="mainContent">
          <div className="ForgotPasswordText">
            <h1>New Password</h1>
          </div>
          <div className="form">
            {" "}
            <div class="yourEmail">
              <h5 id="confirmpassword">Enter Email</h5>
              <input
                value={NewPassword.email}
                type="email"
                id="confirmpasswordinput"
                onChange={(e) =>
                  setNewPassword({ ...NewPassword, email: e.target.value })
                }
                placeholder="enter email"
              />
            </div>
            <br />{" "}
            <div class="yourEmail">
              <h5 id="confirmpassword"> NEW PASSWORD</h5>
              <input
                value={NewPassword.password}
                type={showPassword ? "text" : "password"}
                id="confirmpasswordinput"
                placeholder="Password"
                onChange={(e) =>
                  setNewPassword({ ...NewPassword, password: e.target.value })
                }
              />

              {showPassword ? (
                <svg
                  onClick={PassHandler}
                  id="visibale"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              ) : (
                <svg
                  onClick={PassHandler}
                  id="visibale"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              )}
            </div>
            <br />
            <div class="yourEmail">
              <h5 id="confirmpassword">CONFIRM NEW PASSWORD</h5>
              <input
                value={NewPassword.cPassword}
                type={show_ConfirmPassword ? "text" : "password"}
                id="confirmpasswordinput"
                placeholder="Password"
                onChange={(e) =>
                  setNewPassword({ ...NewPassword, cPassword: e.target.value })
                }
              />

              {show_ConfirmPassword ? (
                <svg
                  onClick={clickToShowPassword}
                  id="visibale"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              ) : (
                <svg
                  onClick={clickToShowPassword}
                  id="visibale"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              )}
            </div>
            <br />
            <button id="Sign_in_button" onClick={clickToFetchData}>
              <span>Reset password</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
