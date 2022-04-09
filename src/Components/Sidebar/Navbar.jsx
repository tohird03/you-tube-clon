import React, { useContext } from 'react';
import { Context } from '../../Context/HamburgerBtn';
import "../Sidebar/Navbar.css"
import shortsIcon from "../../Assets/img/shorts.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { humbergerBtn } = useContext(Context)
    const { search, setSearch } = useContext(Context)
    const handleClickHome = () => {
        setSearch([])
    }
    return (
        <div className={humbergerBtn ? "side-bar" : "side-bar-short"}>
            <div className="navbar">
                <Link onClick={handleClickHome} to="/" className="nav-link">
                    <div className='nav__links'>
                        <i className="material-icons">home</i>
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>Home</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>Home</span>
                </Link>
                <a className="nav-link">
                    <div className='nav__links'>
                        <i className="material-icons">
                            explore
                        </i>
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>Explore</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>Explore</span>
                </a>
                <a className="nav-link">
                    <div className='nav__links'>
                        <img className='nav__links-shorts' width="30" src={shortsIcon} alt="" />
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>Shorts</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>Shorts</span>
                </a>
                <a  className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"}>
                    <i className="material-icons">subscriptions</i>
                    <span className={humbergerBtn ? "d-block ss" : "d-none ss"}>Subscriptions</span>
                </a>

                <hr className={humbergerBtn ? "d-block" : "d-none"}/>
                <a className="nav-link">
                    <div className='nav__links'>
                        <i className="material-icons">video_library</i>
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>Library</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>Library</span>
                </a>

                <Link to="/history" className="nav-link">
                    <div className='nav__links'>
                        <i className="material-icons">history</i>
                        <span id='link__name' className={humbergerBtn ? "d-none" : "d-block"}>History</span>
                    </div>
                    <span className={humbergerBtn ? "d-block" : "d-none"}>History</span>
                </Link>

                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <i className="material-icons">watch_later</i>
                    <span >Watch later</span>
                </a>
                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <i className="material-icons">thumb_up</i>
                    <span >Liked videos</span>
                </a>

                <hr className={humbergerBtn ? "d-block" : "d-none"} />
                <h3 className={humbergerBtn ? "d-block subscription" : "d-none subscription"} >SUBSCRIPTIONS</h3>
                <a className={humbergerBtn ? "d-block nav-link" : "d-none nav-link"} >
                    <i className="material-icons">add_circle_outline</i>
                    <span >Browse channels</span>
                </a>

                <hr className={humbergerBtn ? "d-block" : "d-none"} />
            </div>
        </div>

    );
}

export default Navbar;
