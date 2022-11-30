import React from "react";
import "../Css/On_bording_page.css";
import logo from "../images/logo.png";
import email from "../images/Group.png";
import Google from "../images/Google.png";
import facebook from "../images/facebook.png";
import { Link } from "react-router-dom";

export default function On_bording_page() {
  return (
    <>
      <div className="Sign_in_page">
        <div className="onbordinglogo">
          <img src={logo}></img>
        </div>

        <div className="linkemail">
          <Link to="/Sign_in_page">
            {" "}
            <div className="email">
              <img src={email}></img>
              <h4>Continue with Email</h4>
            </div>
          </Link>

          <div className="email2">
            <img src={Google}></img>
            <h4>Continue with Google</h4>
          </div>

          <div className="email2">
            <img src={facebook}></img>
            <h4>Continue with Facebook</h4>
          </div>

          <div className="email3">
            <h4>Continue with Twitter</h4>
          </div>

          <div className="movesignup">
            <h4>
              New to memee?
              <span>
                {" "}
                <Link to="/Sign_up_page"> Sign up </Link>
              </span>
            </h4>
            <p>
              By continuing you agree Memee’s Terms of Services
              <br /> & Privacy Policy.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
