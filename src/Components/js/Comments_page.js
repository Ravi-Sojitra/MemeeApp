import React, { useState } from "react";
import "../Css/Comments_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import Comments_user_1 from "../images/comments_page/Comments_user_1.png";
import Comments_user_2 from "../images/comments_page/Comments_user_2.png";
import Comments_user_3 from "../images/comments_page/Comments_user_3.png";
import User_written_comments from "../images/comments_page/User_written_comments.png";
import { Link } from "react-router-dom";

export default function Comments_page() {
  const [inputText, setInputText] = useState("");
  // console.log("544666", inputText);
  // var tableData = [
  // {
  //   id: 1,
  //   Comments_user_img: Comments_user_1,
  //   Comments_user_name: "Jullian Fortan",
  //   user_comments: "Hahah....You nailed it!",
  //   Comments_minuts: "18m",
  // },
  // {
  //   id: 2,
  //   Comments_user_img: Comments_user_2,
  //   Comments_user_name: "Charlotte",
  //   user_comments: "Awesome meme!, I like this one LOL.",
  //   Comments_minuts: "15m",
  // },
  // {
  //   id: 3,
  //   Comments_user_img: Comments_user_3,
  //   Comments_user_name: "Rebecca Recto",
  //   user_comments: "LOL...Feeling this right now!",
  //   Comments_minuts: "25m",
  // },
  // {
  //   id: 4,
  //   Comments_user_img: Comments_user_3,
  //   Comments_user_name: "Rebecca Recto",
  //   user_comments: "LOL...Feeling this right now!",
  //   Comments_minuts: "25m",
  // },
  // ];

  const [tableData, settableData] = useState([]);
  console.log("898989898", tableData);
  console.log("tableData+++++++++++++++++++++", tableData);
  const clickToTypeMessage = (e) => {
    // console.log("message is---", e.target.value);
    // setInputText({ ...inputText, user_comments: e.target.value });
    setInputText(e.target.value);
  };
  const clickToSendMessage = () => {
    // console.log("Message Send Successfully");
    let data = {
      id: 1,
      Comments_user_img: Comments_user_1,
      Comments_user_name: "Jullian Fortan",
      user_comments: inputText,
      Comments_minuts: "25m",
    };
    // tableData.push(...tableData, data);
    settableData([...tableData, data]);
    setInputText("");
    // tableData.push({ ...tableData, inputText });
    console.log("table data is____", tableData);
  };

  return (
    <>
      <div className="main_Commments_page">
        <div className="comments_page">
          <div className="CommentsArrow">
            <Link to="/Home_page">
              {" "}
              <img src={Back_Arrow}></img>{" "}
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <h3>Comments</h3>
          </div>

          <div className="comments">
            {tableData.map((data, i) => {
              return (
                <div className="User_comments">
                  <div className="cmd_User_img">
                    <img src={data?.Comments_user_img}></img>
                  </div>
                  <div className="comments_description">
                    <div className="c_d_1">
                      <h5>{data?.Comments_user_name}</h5>
                      <h6>{data?.user_comments}</h6>
                    </div>
                    <div className="Comments_likes_share">
                      <h5>{data?.Comments_minuts}</h5>
                      <h5>Like</h5>
                      <h5>Reply</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cmpst">
          <div className="Comments_post">
            <img src={User_written_comments}></img>
            <div className="Comments_written_post">
              <input
                type="text"
                placeholder="Write a comments"
                onChange={clickToTypeMessage}
                value={inputText}
              ></input>
              <h5 onClick={clickToSendMessage}>Post</h5>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
