import React from 'react';
import '../Css/New_Message_Page_Users.css';
import { Link } from "react-router-dom";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import Gallery from '../images/Chat_page/Gallery.png';
import send from '../images/Chat_page/send.png';
import emoji from '../images/Chat_page/emoji.png'

export default function New_Message_Page_Users() {
  return (
    <>
        <div className='New_Message_Page_Users_page'>
        <div className="New_Messsage_Arrow">
          <Link to="/Inbox_Message_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <h3>New message</h3>
        </div>

        <div className="New_mess_to">
          <h6>To :</h6>
          <div className='New_mess_to_user'>
                <h5>Sunila Ashwin</h5>
          </div>
        </div>


        <div className='chat_keyboard'>
                <img src={Gallery}></img>
                <div className='chat_input'>
                    <input type='text' placeholder='Aa'></input>
                    <img id='chat_emoji' src={emoji}></img>
                </div>
                <img src={send}></img>
            </div>
        </div>
    </>
  )
}
