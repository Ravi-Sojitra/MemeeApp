import React from 'react';
import '../Css/Chat.css';
import back from '../images/Chat_page/back.png'
import Chat_profile from '../images/Chat_page/Chat_profile.png';
import { Link } from "react-router-dom";
import Active from "../images/Message_page/Active.png";
import Gallery from '../images/Chat_page/Gallery.png';
import send from '../images/Chat_page/send.png';
import emoji from '../images/Chat_page/emoji.png'

export default function Chat() {
  return (
    <>
        <div className='chat_page'>
            <div className='Chat_Profile'>
            <Link to="/Inbox_Message_page">   <img id='chat_profile_img' src={back}></img></Link>
                <div className='User_photo_Chat'>
                    <img src={Chat_profile}></img>
                    <img id="I_b_U_5" src={Active}></img>
                    <div className='User_chat_details'>
                        <h5>Annette Black</h5>
                        <h6>Active 1min ago</h6>
                    </div>
                </div>
            </div>

            <div className='Chat_Chat'>
               <div className='user_chat_1_1'>
               <div className='user_chat_1'>
                    <h5>Hey are you enjoying memes?</h5>
                </div>
               </div>

                <div className='user_chat_2'>
                    <h5>Yes, Its so funny</h5>
                </div>

                <div className='user_chat_1_1'>
               <div className='user_chat_1'>
                    <h5>I was just wondering if you can help me in myin collecting memes data circulating these days.</h5>
                </div>
               </div>

               <div className='user_chat_2'>
                    <h5>Ok, sure. Lets have some fun today.</h5>
                </div>


                <div className='user_chat_2'>
                    <h5>BTW I am impressed by your creativity, Last meme went viral🔥</h5>
                </div>

                <div className='user_chat_2'>
                    <h5>Ok, sure. Lets have some fun today.</h5>
                </div>

                <div className='user_chat_1_1'>
               <div className='user_chat_1'>
                    <h5>Hey are you enjoying memes?</h5>
                </div>
               </div>

               
               <div className='user_chat_2'>
                    <h5>Ok, sure. Lets have some fun today.</h5>
                </div>


                <div className='user_chat_2'>
                    <h5>BTW I am impressed by your creativity, Last meme went viral🔥</h5>
                </div>

                <div className='user_chat_1_1'>
               <div className='user_chat_1'>
                    <h5>Hey are you enjoying memes?</h5>
                </div>
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
