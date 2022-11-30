import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Back_Arrow from "../images/Back_Arrow.png";
import "../Css/Sign_up_page.css";
import { Link, useNavigate } from "react-router-dom";
import { addUserData, allAction } from "../../Redux/Action/action";

export default function Sign_up_page() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const [pass, setPass] = useState(false);
  const [cPassword, setCpassword] = useState(false);
  const [equalTo, setIsEqualTo] = useState(false);
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState({
    email: "",
    password: "",
    cPassword: "",
  });

  const navigate = useNavigate();

  const clickToSignUpInApp = () => {
    if (
      isSignUp.email == "" &&
      isSignUp.password == "" &&
      isSignUp.cPassword == ""
    ) {
      setError(!error);
      setPass(!pass);
      setCpassword(!cPassword);
    } else if (isSignUp.email == "") {
      setError(!error);
    } else if (isSignUp.password === "") {
      setPass(!pass);
    } else if (isSignUp.cPassword == "") {
      setCpassword(!cPassword);
    } else if (isSignUp.password !== isSignUp.cPassword) {
      setIsEqualTo(!equalTo);
    } else {
      setIsEqualTo(false);
      let obj = {
        email: isSignUp.email,
        password: isSignUp.password,
        cPassword: isSignUp.cPassword,
      };

      fetch(`${process.env.REACT_APP_EDIT_PROFILE_API_KEY}/signUp`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("Data Get Successfully");
          if (data.status === 200) {
            setUserData(data);
            console.log(data);
            dispatch(addUserData(data));
            navigate("/Home_page");
          } else {
            alert("signup failed");
          }
          console.log("(*******)", userData.push(obj.email));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const [showPassword, SetShowPassword] = useState();

  const PassHandler = () => {
    SetShowPassword(!showPassword);
  };
  return (
    <>
      <div className="Sign_in_page">
        <div className="back_Arrow">
          <Link to="/On_bording_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>
        </div>
        <div className="mainContent">
          <div className="SignInText">
            <h1>Sign up</h1>
            <p id="signupparagraph">
              Lets create an account on memee to enjoy memes.
            </p>
          </div>
          <div className="form">
            <div class="yourEmail">
              <h5>YOUR EMAIL</h5>
              <input
                value={isSignUp.email}
                type="email"
                required
                id="email"
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setError(false);
                  setIsSignUp({ ...isSignUp, email: e.target.value });
                }}
              />
              {error ? (
                <small style={{ color: "red" }}>please enter email</small>
              ) : (
                ""
              )}
            </div>
            <div class="yourEmail">
              <h5>YOUR PASSWORD</h5>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={isSignUp.password}
                onChange={(e) => {
                  setPass(false);
                  setIsSignUp({ ...isSignUp, password: e.target.value });
                }}
              />
              {pass ? (
                <small style={{ color: "red" }}>please enter password</small>
              ) : (
                ""
              )}
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
            <div className="yourEmail">
              <h5>Confirm password</h5>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={isSignUp.cPassword}
                onChange={(e) => {
                  setCpassword(false);
                  setIsSignUp({ ...isSignUp, cPassword: e.target.value });
                }}
              />
              {cPassword ? (
                <small style={{ color: "red" }}>
                  please enter confirm password
                </small>
              ) : (
                ""
              )}
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
            <br />{" "}
            {equalTo ? (
              <small style={{ color: "red" }}>enter same password</small>
            ) : (
              ""
            )}
            <button id="Sign_in_button" onClick={clickToSignUpInApp}>
              <span>Sign up</span>
            </button>
          </div>
          <div className="movesignup2">
            <h4>
              Already on memee?
              <span>
                {" "}
                <Link to="/Sign_in_page"> Sign in </Link>
              </span>
            </h4>
            <p>
              By continuing you agree Memee’s Terms of Services & Privacy
              Policy.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
