import React, { useState } from "react";
import "../Css/Explore_search_page.css";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import search from "../images/Explore_page/search.png";
import Notification from "../images/Home_page/Notification.png";
import Home from "../images/Explore_page/Home.png";
import explore from "../images/Explore_page/Explore_2.png";
import m_add from "../images/Home_page/m_add.png";
import tournament from "../images/Home_page/tournament.png";
import profile from "../images/Home_page/profile.png";
import { Link } from "react-router-dom";
import Explore_search_user_1 from "../images/Explore_search_img/Explore_search_user_1.png";
import close from "../images/Explore_search_img/close.png";

export const ThemeContext = React.createContext();

export default function Explore_search_page() {
  const [blueTheme, setBlueTheme] = useState(false);

  const clickToSetBlueTheme = () => {
    setBlueTheme(true);
  };

  return (
    <>
      <div className="mainclassofapp">
        <div className="Explore_search_page">
          <div className="home_page_Header">
            <div className="Explore_name">
              <h2>Explore </h2>
            </div>
            <div className="notiadd">
              <Link to="/Inbox">
                {" "}
                <div className="Home_Notification">
                  <img src={Notification}></img>
                </div>
              </Link>
              <Link to="/Add_Coins_page">
                {" "}
                <div className="add_coin">
                  <img src={Add}></img>
                  <h3>7412</h3>
                  <img src={Coin}></img>
                </div>
              </Link>
            </div>
          </div>

          <div className="Search_explore">
            <img src={search}></img>
            <input type="text" placeholder="Search hashtags, usernames"></input>
          </div>

          <div className="Expolore_search_options">
            <div className="Expolore_search_options_top">
              <h5>Top</h5>
            </div>
            <div className="Expolore_search_options_top2">
              <h5>Accounts</h5>
            </div>
            <div className="Expolore_search_options_top2">
              <h5>Tags</h5>
            </div>
            <div className="Expolore_search_options_top2">
              <h5>Places</h5>
            </div>
          </div>

          <div className="Search_explore_react_search">
            <div className="Search_explore_react_search_1">
              <h3>Recent Searches</h3>
            </div>
            <div className="Search_explore_react_search_2">
              <h3>See All</h3>
            </div>
          </div>

          <div className="Recent_search_user_profile">
            <div className="Recent_user_1">
              <div className="R_U_1">
                <img src={Explore_search_user_1}></img>
                <div className="R_U_1_1">
                  <h5>Isaac Carew</h5>
                  <h6>Isaac_09</h6>
                </div>
              </div>

              <div className="R_U_2">
                <img src={close}></img>
              </div>
            </div>

            <div className="Recent_user_1">
              <div className="R_U_1">
                <img src={Explore_search_user_1}></img>
                <div className="R_U_1_1">
                  <h5>Isaac Carew</h5>
                  <h6>Isaac_09</h6>
                </div>
              </div>

              <div className="R_U_2">
                <img src={close}></img>
              </div>
            </div>

            <div className="Recent_user_1">
              <div className="R_U_1">
                <img src={Explore_search_user_1}></img>
                <div className="R_U_1_1">
                  <h5>Isaac Carew</h5>
                  <h6>Isaac_09</h6>
                </div>
              </div>

              <div className="R_U_2">
                <img src={close}></img>
              </div>
            </div>

            <div className="Recent_user_1">
              <div className="R_U_1">
                <div className="R_hash">
                  <h1>#</h1>
                </div>
                <div className="R_U_1_1">
                  <h5>#isaac</h5>
                  <h6>136k posts</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <Link to="/Home_page">
            {" "}
            <div className="home2">
              <img src={Home}></img>
              <h6>Home</h6>
            </div>
          </Link>
          <Link to="/Expolor_page">
            {" "}
            <div className="home">
              <img src={explore}></img>
              <h6>Explore</h6>
            </div>
          </Link>
          &nbsp;
          <div className="home3">
            <img src={m_add} onClick={clickToSetBlueTheme}></img>
          </div>
          &nbsp;
          <Link to="/Tournamet">
            <div className="home2">
              <img src={tournament}></img>
              <h6>Tournament</h6>
            </div>
          </Link>
          <Link to="/Profile">
            <div className="home2">
              <img src={profile}></img>
              <h6>Profile</h6>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
