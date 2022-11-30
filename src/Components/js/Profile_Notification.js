import React from "react";
import "../Css/Profile_Notification.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import Notification from "../images/Settings_page/Notification.png";
import smsalert from "../images/Settings_page/smsalert.png";
import emailreminder from "../images/Settings_page/emailreminder.png";

export default function Profile_Notification() {
  return (
    <>
      <div className="Profile_Notification">
        <div className="CommentsArrow">
          <Link to="/Profile_Setting">
            <img src={Back_Arrow}></img>
          </Link>
          &nbsp;&nbsp;
          <h3>Notifications</h3>
        </div>
        <br />
        <div className="P_S">
          <div className="P_Setting_1">
            <div className="P_Setting_1_1">
              <img src={Notification}></img>
            </div>
            <div className="P_Setting_1_2">
              <h5>Push Notifications</h5>
            </div>
          </div>
          <div className="P_Setting">
            <div class="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
            </div>
          </div>
        </div>

        <div className="P_S">
          <div className="P_Setting_1">
            <div className="P_Setting_1_1">
              <img src={smsalert}></img>
            </div>
            <div className="P_Setting_1_2">
              <h5>SMS Alerts</h5>
            </div>
          </div>
          <div className="P_Setting">
            <div class="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
            </div>
          </div>
        </div>

        <div className="P_S">
          <div className="P_Setting_1">
            <div className="P_Setting_1_1">
              <img src={emailreminder}></img>
            </div>
            <div className="P_Setting_1_2">
              <h5>Email Reminders</h5>
            </div>
          </div>
          <div className="P_Setting">
            <div class="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
