import React from "react";
import "../Css/Profile_Setting.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import Acc_Details from "../images/Settings_page/Acc_Details.png";
import Belling_details from "../images/Settings_page/Belling_details.png";
import Notification from "../images/Settings_page/Notification.png";
import move from "../images/Settings_page/move.png";

export default function Profile_Setting() {
  return (
    <>
      <div className="Profile_Setting">
        <div className="CommentsArrow">
          <Link to="/Profile">
            <img src={Back_Arrow}></img>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <h3>Settings</h3>
        </div>
        <br />

        <Link to="/Edit_Profile_Page">
          <div className="P_S">
            <div className="P_Setting_1">
              <div className="P_Setting_1_1">
                <img src={Acc_Details}></img>
              </div>
              <div className="P_Setting_1_2">
                <h5>Account Details</h5>
                <h6>John Smith</h6>
              </div>
            </div>
            <div className="P_Setting_2">
              <img src={move}></img>
            </div>
          </div>
        </Link>

        <hr id="psethr" />

        <Link to="/Profile_Billing_page">
          <div className="P_S">
            <div className="P_Setting_1">
              <div className="P_Setting_1_1">
                <img src={Belling_details}></img>
              </div>
              <div className="P_Setting_1_2">
                <h5>Billing Details</h5>
                <h6>Mastercard ****0123</h6>
              </div>
            </div>
            <div className="P_Setting_2">
              <img src={move}></img>
            </div>
          </div>
        </Link>

        <hr id="psethr" />

        <Link to="/Profile_Notification">
          <div className="P_S">
            <div className="P_Setting_1">
              <div className="P_Setting_1_1">
                <img src={Notification}></img>
              </div>
              <div className="P_Setting_1_2">
                <h5>Notifications</h5>
                <h6>Enabled</h6>
              </div>
            </div>
            <div className="P_Setting_2">
              <img src={move}></img>
            </div>
          </div>
        </Link>

        <hr id="psethr" />

        <Link to="/Support_page">
          <div className="P_S">
            <div className="P_Setting_1">
              <div className="P_Setting_1_1">
                <img src={Notification}></img>
              </div>
              <div className="P_Setting_1_2">
                <h5>Support</h5>
                <h6>User Support</h6>
              </div>
            </div>
            <div className="P_Setting_2">
              <img src={move}></img>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
