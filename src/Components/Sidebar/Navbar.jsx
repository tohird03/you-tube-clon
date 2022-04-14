import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/HamburgerBtn';
import "../Sidebar/Navbar.css"
import shortsIcon from "../../Assets/img/shorts.png"
import { NavLink } from 'react-router-dom';
import muzic from '../../Assets/img/muzic.png';
const Navbar = () => {
    const { humbergerBtn } = useContext(Context)
    const { search, setSearch } = useContext(Context)
    const { addChannel, setAddChannel } = useContext(Context)
    const [chanelNames, setChanelName] = useState([])
    const handleClickHome = () => {
        setSearch([])
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            'X-RapidAPI-Key': '7306d73337msh7fad6a0fa751d98p10c355jsna8f006a0cd81'
        }
    };

    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${addChannel}`, options)
            .then(response => response.json())
            .then(response => setChanelName(response))
            .catch(err => console.error(err));
    }, [addChannel]);


    console.log(chanelNames);
    return (
        <div className={humbergerBtn ? "side-bar" : "side-bar-short"}>
            <div className="navbar">
                <NavLink style={({ isActive }) =>
                    (isActive ? { color: 'red' } : { color: 'blue' })} onClick={handleClickHome} to="/" className="nav-link">
                    <div className='nav__links'>
                        <i className="material-icons">home</i>
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>Home</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>Home</span>
                </NavLink>

                <NavLink to="/explore" className="nav-link">
                    <div className='nav__links'>
                        <i className="material-icons">
                            explore
                        </i>
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>Explore</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>Explore</span>
                </NavLink>

                <a className="nav-link">
                    <div className='nav__links'>
                        <img className='nav__links-shorts' width="30" src={shortsIcon} alt="" />
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>Shorts</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>Shorts</span>
                </a>

                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"}>
                    <i className="material-icons">subscriptions</i>
                    <span className={humbergerBtn ? "d-block ss" : "d-none ss"}>
                        Subscriptions
                    </span>
                </a>

                <hr className={humbergerBtn ? "d-block" : "d-none"} />

                <NavLink to="/library" className="nav-link">
                    <div className='nav__links'>
                        <i className="material-icons">video_library</i>
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>Library</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>Library</span>
                </NavLink>

                <NavLink to="/history" className="nav-link">
                    <div className='nav__links'>
                        <i className="material-icons">history</i>
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>History</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>History</span>
                </NavLink>

                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <i className="material-icons">watch_later</i>
                    <span >Watch later</span>
                </a>

                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <i className="material-icons">thumb_up</i>
                    <span >Liked videos</span>
                </a>

                <hr className={humbergerBtn ? "d-block" : "d-none"} />

                <h3 className={humbergerBtn ? "d-block subscription" : "d-none subscription"} >
                    SUBSCRIPTIONS
                </h3>

                {
                    chanelNames?.items?.map(i => {
                        return <NavLink to="/chanel" className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                            <i className="material-icons">add_circle_outline</i>
                            <span >Browse channels</span>
                        </NavLink>
                    })
                }


                <NavLink to="/chanel" className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <i className="material-icons">add_circle_outline</i>
                    <span >Browse channels</span>
                </NavLink>

                <hr className={humbergerBtn ? "d-block" : "d-none"} />

                <h3 className={humbergerBtn ? "d-block subscription" : "d-none subscription"} >
                    SUBSCRIPTIONS
                </h3>

                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <i className="material-icons">sports_esports</i>
                    <span >Gaming</span>
                </a>

                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <img className='link__icon' width="24" height="24" src="https://img.icons8.com/ios/50/000000/youtube-live.png" />
                    <span >Live</span>
                </a>

                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <img className='link__icon' width="24" height="24" src={muzic} />
                    <span >Muzic</span>
                </a>

                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <i className="material-icons">emoji_events</i>
                    <span >Sports</span>
                </a>
            </div>
        </div>

    );
}

export default Navbar;
