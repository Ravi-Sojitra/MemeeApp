import React, { useState } from "react";
import "../Css/Home_page.css";
import Profile_image from "../images/Home_page/Profile_image.png";
import Notification from "../images/Home_page/Notification.png";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Story_user_img_1 from "../images/Home_page/Story_user_img_1.png";
import Story_user_img_2 from "../images/Home_page/Story_user_img_2.png";
import Story_user_img_3 from "../images/Home_page/Story_user_img_3.png";
import Story_user_img_4 from "../images/Home_page/Story_user_img_4.png";
import Story_1 from "../images/Home_page/Story_1.png";
import Story_2 from "../images/Home_page/Story_2.png";
import User_post_img from "../images/Home_page/User_post_img.png";
import three_dot from "../images/Home_page/three_dot.png";
import post from "../images/Home_page/post.png";
import Home from "../images/Home_page/Home.png";
import explore from "../images/Home_page/explore.png";
import m_add from "../images/Home_page/m_add.png";
import tournament from "../images/Home_page/tournament.png";
import profile from "../images/Home_page/profile.png";
import Like from "../images/Home_page/Like.png";
import comments from "../images/Home_page/comments.png";
import share from "../images/Home_page/share.png";
import User_post2_img from "../images/Home_page/post_2.png";
import heart from "../images/Chat_page/Heart.png";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Home_page() {
  const [openmenu, setOpenmenu] = useState(false);

  const profileMenu = () => {
    setOpenmenu(!openmenu);
  };

  const tableData = [
    {
      id: 1,
      story: Story_1,
      user_image: Story_user_img_2,
      user_name: "Charlotte",
    },
    {
      id: 2,
      story: Story_2,
      user_image: Story_user_img_3,
      user_name: "Miranda",
    },
    {
      id: 3,
      story: Story_1,
      user_image: Story_user_img_4,
      user_name: "Moheen",
    },
    {
      id: 4,
      story: Story_2,
      user_image: Story_user_img_3,
      user_name: "Miranda",
    },
    {
      id: 5,
      story: Story_1,
      user_image: Story_user_img_2,
      user_name: "Moheen",
    },
    {
      id: 6,
      story: Story_2,
      user_image: Story_user_img_3,
      user_name: "Miranda",
    },
    {
      id: 7,
      story: Story_1,
      user_image: Story_user_img_4,
      user_name: "Moheen",
    },
    {
      id: 1,
      story: Story_1,
      user_image: Story_user_img_2,
      user_name: "Charlotte",
    },
    {
      id: 2,
      story: Story_2,
      user_image: Story_user_img_3,
      user_name: "Miranda",
    },
    {
      id: 3,
      story: Story_1,
      user_image: Story_user_img_4,
      user_name: "Moheen",
    },
    {
      id: 4,
      story: Story_2,
      user_image: Story_user_img_3,
      user_name: "Miranda",
    },
    {
      id: 5,
      story: Story_1,
      user_image: Story_user_img_2,
      user_name: "Moheen",
    },
    {
      id: 6,
      story: Story_2,
      user_image: Story_user_img_3,
      user_name: "Miranda",
    },
    {
      id: 7,
      story: Story_1,
      user_image: Story_user_img_4,
      user_name: "Moheen",
    },
  ];

  const tableData2 = [
    {
      id: 1,
      user_post_image: User_post_img,
      user_post_name: "Jullian Fortan",
      post_location: "Madrid, Spain",
      post_content: "New Popular meme",
      post_tag: "#memes #bestmeme #funnymemes #dankmemes",
      post_image: post,
    },
    {
      id: 2,
      user_post_image: User_post2_img,
      user_post_name: "Tyler Mady",
      post_location: "Madrid, Spain",
      post_content: "New Popular meme",
      post_tag: "#memes #bestmeme #funnymemes #dankmemes",
      post_image: post,
    },
    {
      id: 3,
      user_post_image: User_post_img,
      user_post_name: "Jullian Fortan",
      post_location: "Madrid, Spain",
      post_content: "New Popular meme",
      post_tag: "#memes #bestmeme #funnymemes #dankmemes",
      post_image: post,
    },
    {
      id: 4,
      user_post_image: User_post2_img,
      user_post_name: "Tyler Mady",
      post_location: "Madrid, Spain",
      post_content: "New Popular meme",
      post_tag: "#memes #bestmeme #funnymemes #dankmemes",
      post_image: post,
    },
    {
      id: 5,
      user_post_image: User_post_img,
      user_post_name: "Jullian Fortan",
      post_location: "Madrid, Spain",
      post_content: "New Popular meme",
      post_tag: "#memes #bestmeme #funnymemes #dankmemes",
      post_image: post,
    },
    {
      id: 6,
      user_post_image: User_post2_img,
      user_post_name: "Tyler Mady",
      post_location: "Madrid, Spain",
      post_content: "New Popular meme",
      post_tag: "#memes #bestmeme #funnymemes #dankmemes",
      post_image: post,
    },
  ];
  let b = document.querySelector("button");
  // setTimeout(() => b.focus(), 100);
  // setTimeout(() => b.blur(), 1000);
  const [heartBorder, setHeartBorder] = useState(true);
  const clickToLike = () => {
    setHeartBorder(!heartBorder);
  };
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="mainclassofapp">
        <div className="Home_page">
          <div className="home_page_Header">
            <div className="user_profile_image">
              <img src={Profile_image}></img>
            </div>
            <div className="user_name">
              <h2>
                Hi <span>Astronut,</span>
              </h2>
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
          <div className="home_page_Section2">
            <div className="following">
              <h5>Following</h5>
            </div>
            <div className="following2">
              <h5>New Memes</h5>
            </div>
            <div className="following2">
              <h5>Trending</h5>
            </div>
          </div>{" "}
          <div class="large-font text-center top-20">
            <ion-icon name="heart">
              <div class="red-bg"></div>
            </ion-icon>
          </div>
          <div className="add_story">
            <div className="Add_your_story">
              <br />
              <h4>Add&nbsp;story</h4>
              <img src={Story_user_img_1}></img>
              <div>
                {/* <input type="file" name="image" accept="image/*" capture="user"></input> */}
                {/* <input type="file" accept="image/*" capture="camera" /> */}
              </div>
              <h5>You</h5>
            </div>

            {tableData.map((data, i) => {
              return (
                <div
                  style={{ backgroundImage: `url(${data.story})` }}
                  className="Add_your_story2"
                >
                  <div className="Addstory">
                    <br />
                    <img src={data.user_image}></img>
                    <h5>{data.user_name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
          {tableData2.map((data, i) => {
            return (
              <div className="Home_page_post">
                <div className="User_pofile_post_Details">
                  <div className="post_user_details">
                    <img src={data.user_post_image}></img>
                    <div className="post_username_details">
                      <h5>{data.user_post_name}</h5>
                      <h6>{data.post_location}</h6>
                    </div>
                  </div>

                  <div>
                    {["bottom"].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Button
                          onClick={toggleDrawer(anchor, true)}
                          className="profileMenuBtn"
                        >
                          <img
                            onClick={toggleDrawer}
                            id="threeeDot_post"
                            src={three_dot}
                          ></img>
                          <span style={{ display: "none" }}>{anchor}</span>
                        </Button>
                        <SwipeableDrawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                          onOpen={toggleDrawer(anchor, true)}
                        >
                          {list(anchor)}
                        </SwipeableDrawer>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="Post_tag_details">
                  <h6>{data.post_content}</h6>
                  <p>{data.post_tag}</p>
                </div>
                <div className="user_posted_media">
                  <div className="POsed_media_By_user">
                    <img src={data.post_image}></img>
                  </div>

                  <div className="likesharecomment">
                    {" "}
                    <div className="post_like">
                      {heartBorder ? (
                        <img src={Like} onClick={clickToLike} />
                      ) : (
                        <img src={heart} onClick={clickToLike}></img>
                      )}
                      <h5>1k</h5>
                    </div>
                    <Link to="/Comments_page">
                      {" "}
                      <div className="post_like">
                        <img src={comments}></img>
                        <h5>175</h5>
                      </div>{" "}
                    </Link>
                    <div className="post_like">
                      <img src={share}></img>
                      <h5>20</h5>
                    </div>
                  </div>
                </div>
                <hr id="home_post_hr" />
              </div>
            );
          })}
        </div>

        <div className="navbar">
          <div className="home">
            <img src={Home}></img>
            <h6>Home</h6>
          </div>
          <Link to="/Expolor_page">
            {" "}
            <div className="home2">
              <img src={explore}></img>
              <h6>Explore</h6>
            </div>
          </Link>
          &nbsp;
          <div className="home3">
            <img src={m_add}></img>
          </div>
          &nbsp;
          <Link to="/Tournamet">
            <div className="home2">
              <img src={tournament}></img>
              <h6>Tournament</h6>
            </div>
          </Link>
          <Link to="/Profile">
            {" "}
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
