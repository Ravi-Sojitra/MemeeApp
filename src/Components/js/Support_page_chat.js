import React from "react";
import "../Css/Support_page_chat.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import Gallery from "../images/Chat_page/Gallery.png";
import send from "../images/Chat_page/send.png";
import emoji from "../images/Chat_page/emoji.png";
import Sup_Chat_user from "../images/support page/Sup_Chat_user.png";
import Sup_Chat_img_1 from "../images/support page/Sup_Chat_img_1.png";
import Sup_Chat_img_2 from "../images/support page/Sup_Chat_img_2.png";
import Sup_Chat_logo from '../images/support page/Sup_Chat_logo.png'

export default function Support_page_chat() {
  return (
    <>
      <div className="Support_page_chat">
        <div className="supp_chat_arr">
          <div className="CommentsArrow">
            <Link to="/Support_page_2">
              {" "}
              <img src={Back_Arrow}></img>
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <h3>Support</h3>
          </div>
        </div>

        <div className="sup_chat_1">
          <div className="support_chat">
            <div className="supp_1">
              <img src={Sup_Chat_user}></img>
              <div className="supp_2">
                <h4>Plagiarism</h4>
                <h5>903F9G9GTH</h5>
              </div>
            </div>
            <h3>Pending</h3>
          </div>
          <div className="reportodsup">
            <p>
              These rules and regulations for the use of Memee, located at
              Stumble’scom. By accessing this website we assume you accept these
              terms and conditions. Do not continue to use if you do not agree
              to take all of the terms and conditions stated on this page. By
              accessing this
            </p>
            <img src={Sup_Chat_img_1}></img>
            <img src={Sup_Chat_img_2}></img>
          </div>
        </div>

        <div className="sup_chat_1">
          <div className="support_chat">
            <div className="supp_1">
              <img src={Sup_Chat_logo}></img>
              <div className="supp_3">
                <h4>Memee Admin</h4>
                <h5>April 25, 2022</h5>
              </div>
            </div>
            <h3>Pending</h3>
          </div>
          <div className="reportodsup">
            <p>
              These rules and regulations for the use of Stumble’s Website,
              located at meme.com By accessing this website we assume you accept
              these terms and conditions. Do not continue to use if you do not
              agree to take all of the terms and conditions stated on this page.
              By accessing this website we assume you accept these terms and
              conditions.
            </p>
          </div>
        </div>

        <div className="chat_keyboard">
          <img src={Gallery}></img>
          <div className="chat_input">
            <input type="text" placeholder="Aa"></input>
            <img id="chat_emoji" src={emoji}></img>
          </div>
          <img src={send}></img>
        </div>
      </div>
    </>
  );
}
