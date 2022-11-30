import React, { useEffect, useState } from "react";
import "../Css/Sign_in_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import { Link, Router, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../Redux/Action/action";
import AlertBox from "./AlertBox";
import Home_page from "./Home_page";
import App from "../../App";

export default function Sign_in_page(props) {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  console.log("+++++++++++", token);
  const navigate = useNavigate();
  const [selectData, setSelectData] = useState([]);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showalert, setAlert] = useState(false);

  const [showPassword, SetShowPassword] = useState();

  useEffect(() => {
    if (token) {
      console.log("******************");
      navigate("/Home_page");
    }
  }, [token]);

  const PassHandler = () => {
    SetShowPassword(!showPassword);
  };

  const clickToGetData = async (e) => {
    if (userData.email === "") {
      alert("invalid email");
    } else if (userData.password === "") {
      alert("invalid password");
    } else {
      let userObj = {
        email: userData.email,
        password: userData.password,
      };

      await fetch(`${process.env.REACT_APP_EDIT_PROFILE_API_KEY}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userObj),
      })
        // .then((response) => {
        //   console.log("response 43-line", response);
        //   console.log(
        //     response.json(),
        //     "-----------------------------------------------"
        //   );
        //   //return response.formData();
        // })

        .then((response) => response.json())
        .then(({ data }) => {
          console.log("{data-------}", data);
          console.log("data json format |||", data.tokens[0].token);
          localStorage.setItem("token", data.tokens[0].token);
          localStorage.getItem("token");
          if (data.tokens[0].token || data.status === 200) {
            setToken(data.tokens[0].token);
            setError(data.message);
            console.log("hiiii--", data.message);
            // navigate("/Home_page");
          } else {
            setError(data.error);
            setAlert(true);
            console.log("hiiii", error);
          }
          // const tk = tokens.map((i) => i.token);
          console.log(token, "token set usestate");
        })
        .catch((error) => {
          console.log("erorrrrrrr", error);
        });
    }
  };

  return (
    <>
      <div className="Sign_in_page">
        <div className="back_Arrow">
          <Link to="/On_bording_page">
            {" "}
            <img src={Back_Arrow}></img>
          </Link>
        </div>
        <div className="mainContent">
          <div className="SignInText">
            <h1>Sign in</h1>
            <p>Enter email and password to get signed in.</p>
          </div>
          <div className="form">
            <div class="yourEmail">
              <h5>YOUR EMAIL</h5>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="usernameFromSignIn"
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserData({ ...userData, email: e.target.value });
                }}
                value={userData.email}
                required
              />
            </div>

            <div class="yourEmail">
              <h5>YOUR PASSWORD</h5>
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                value={userData.password}
                required
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

              {/* <img id="visibale" src={Eye}></img> */}
            </div>

            <div className="forgotPassword">
              <h6>
                {" "}
                <Link to="/Forgot_password_page">Forgot Password?</Link>
              </h6>
            </div>
            <div style={{ color: "red" }}>{error}</div>
            <button id="Sign_in_button" onClick={clickToGetData}>
              <span>Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
