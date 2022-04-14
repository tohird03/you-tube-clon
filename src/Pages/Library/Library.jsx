import React from 'react';
import "../Library/Library.scss"
import { NavLink } from 'react-router-dom';
import history from "../../Assets/img/history.png"
import clock from "../../Assets/img/clock.png"
import playlest from "../../Assets/img/playlist.png"
import likedlight from "../../Assets/img/liked.png"

const Library = () => {
    return (
        <div className="library">
            <div className='library__types'>
                <div className='library__category-type'>
                    <NavLink to="/history" className='library__category'>
                        <img className='library__category-icon' src={history} alt="" />
                        <h3 className='library__category-heading'>History</h3>
                    </NavLink>

                    <p className='library__category-desc'>Videos you watch will show up here. <NavLink className="library__home-link" to="/">Browse videos</NavLink></p>
                </div>

                <hr />

                <div className='library__category-type'>
                    <NavLink to="/history" className='library__category'>
                        <img className='library__category-icon' src={clock} alt="" />
                        <h3 className='library__category-heading'>Watch later</h3>
                    </NavLink>

                    <p className='library__category-desc'>
                        Save videos to watch later. Your list shows up right here.
                    </p>
                </div>

                <hr />

                <div className='library__category-type'>
                    <NavLink to="/history" className='library__category'>
                        <img className='library__category-icon' src={playlest} alt="" />
                        <h3 className='library__category-heading'>Playlists</h3>
                    </NavLink>

                    <p className='library__category-desc'>
                        Playlists you create or save will show up here.
                    </p>
                </div>
                <hr />

                <div className='library__category-liked'>
                    <NavLink to="/history" className='library__category'>
                        <img className='library__category-icon' src={likedlight} alt="" />
                        <h3 className='library__category-heading '>
                            Liked videos
                            <span className='library__category-likeHeading'>18</span>
                        </h3>
                    </NavLink>

                    <NavLink to="/" className='library__category-likeDesc'>
                        See All
                    </NavLink>
                </div>
            </div>

            <div className='library__user'>
                <div className='library__user-account'>
                    T
                </div>
                <p className='library__user-name'>Tohir Doniyorov</p>

                <hr className='library__user-linear'/>

                <div className='library__user-subscript'>
                    <span>Subscriptions</span>
                    <span>2</span>
                </div>

                <hr className='library__user-linear'/>

                <div className='library__user-subscript'>
                    <span>Uploads</span>
                    <span>0</span>
                </div>

                <hr className='library__user-linear'/>
                <div className='library__user-subscript'>
                    <span>Likes</span>
                    <span>18</span>
                </div>

                <hr className='library__user-linear'/>
            </div>
        </div>
    );
}


export default Library;
