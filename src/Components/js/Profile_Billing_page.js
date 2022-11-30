import React from "react";
import "../Css/Profile_Billing_page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import cvv from "../images/Settings_page/cvv.png";
import card from "../images/Settings_page/card.png";
import date from '../images/Settings_page/date.png'

export default function Profile_Billing_page() {
  return (
    <>
      <div className="Profile_Billing_page">
        <div className="CommentsArrow">
          <Link to="/Profile_Setting">
            <img src={Back_Arrow}></img>{" "}
          </Link>
          &nbsp;&nbsp;&nbsp;
          <h3>Biling Details</h3>
        </div>
        <br />
      <div className="bill1">
      <div className="billdetails">
          <h5>Card Number</h5>
          <div className="B_D_1">
            <div className="P_bill_1_1">
              <img src={card}></img>
            </div>
            <h6>1234 1234 1234 0123</h6>
          </div>
        </div>
        <hr id='psethr'/>

        <div className="billdetails">
          <h5>Expiry Date</h5>
          <div className="B_D_1">
            <div className="P_bill_1_1">
              <img src={card}></img>
            </div>
            <h6>07/23</h6>
          </div>
        </div>
        <hr id='psethr'/>


        <div className="billdetails">
          <h5>Card Number</h5>
          <div className="B_D_1">
            <div className="P_bill_1_1">
              <img src={cvv}></img>
            </div>
            <h6>123</h6>
          </div>
        </div>
        <hr id='psethr'/>
      </div>
      </div>
    </>
  );
}
