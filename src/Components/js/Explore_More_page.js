import React from 'react';
import '../Css/Explore_More_page.css';
import N_back from '../images/Explore_more_page/N_back.png';
import { Link } from "react-router-dom";
import Like from '../images/Explore_more_page/N_like.png';
import comments from '../images/Explore_more_page/N_commets.png';
import share from '../images/Explore_more_page/N_share.png';
import N_user from '../images/Explore_more_page/N-user.png';
import N_3 from '../images/Explore_more_page/N_3.png'
import N_1 from '../images/Explore_more_page/N_1.png'
import N_2 from '../images/Explore_more_page/N_2.png'
import N_5 from '../images/Explore_more_page/N_5.png'


 
export default function Explore_More_page() {
  return (
    <>
        <div className='Explore_More_page'>
                <div className='N_Nature'>
                    <div className='N_back'>
                        <Link to="/Expolor_page">
                        <div className='N_back_1'>
                          <img src={N_back}></img>
                        </div>
                        </Link>
                        <div className='N_Back_hash'>
                            <h6>#Nature</h6>
                        </div>
                    </div>  
                </div>

                <div className='ExploreLikeCmtShr'>
                <div className='explorepagelike'>
                        <div className='explore_like'>
                            <img src={Like}></img>
                            <h5>23k</h5>
                        </div>
                         <div className='explore_like'>
                            <img src={comments}></img>
                            <h5>175</h5>
                        </div> 
                        <div className='explore_like'>
                            <img src={share}></img>
                            <h5>20</h5>
                        </div>
                    </div>
                </div>

                <div className='Explr_User_details_post'>
                    <img src={N_user}></img>
                    <div className='Explr_User_details_post_2'>
                        <h5><span>Jullian Fortan</span> New Popular meme.</h5>
                        <h6>#memes #bestmeme #funnymemes #dankmemes </h6>
                    </div>
                </div>


                <div className='MoreExplorelike'>
                    <h4>More like this</h4>

                    <div className='likemore_Explore'> 
                       <div>
                       <img src={N_3}></img>
                        <img src={N_1}></img>
                        <img src={N_5}></img>
                        <img src={N_2}></img>
                        <img src={N_5}></img>
                        <img src={N_2}></img>
                        <img src={N_3}></img>
                        <img src={N_1}></img>
                        <img src={N_5}></img>
                        <img src={N_2}></img>
                        <img src={N_3}></img>
                        <img src={N_1}></img>
                        <img src={N_3}></img>
                        <img src={N_1}></img>
                        <img src={N_5}></img>
                        <img src={N_2}></img>
                       </div>&nbsp;&nbsp;
                        <div>
                        <img src={N_5}></img>
                        <img src={N_2}></img>
                        <img src={N_3}></img>
                        <img src={N_1}></img>
                        <img src={N_3}></img>
                        <img src={N_1}></img>
                        <img src={N_5}></img>
                        <img src={N_2}></img>
                        <img src={N_3}></img>
                        <img src={N_1}></img>
                        <img src={N_5}></img>
                        <img src={N_2}></img>
                        <img src={N_5}></img>
                        <img src={N_2}></img>
                        <img src={N_3}></img>
                        <img src={N_1}></img>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}
