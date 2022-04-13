import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/HamburgerBtn';
import "../Header/Header.css"
import Search from '../../Pages/Search/Search';
import userIcon from "../../Assets/img/user.png"
import addUser from "../../Assets/img/add-user.png"
import logout from "../../Assets/img/logout.png"
import monthLight from "../../Assets/img/light-moon.png"
import translate from "../../Assets/img/translate.png"
import location from "../../Assets/img/location.png"
import secret from "../../Assets/img/secret.png"
import keyboard from "../../Assets/img/klavish.png"
import prev from "../../Assets/img/prev.png"
import youtubetv from "../../Assets/img/youtubetv.png"
import youtubemusic from "../../Assets/img/youtubemusic.png"
import youtubekids from "../../Assets/img/youtubekids.png"
import youtube from "../../Assets/img/youtube.png"
const Header = () => {

    const { search, setSearch } = useContext(Context)
    const [searchValue, setSearchValue] = useState("")
    const { humbergerBtn, setHumbergerBtn } = useContext(Context)
    const { searchPage, setSearchPage } = useContext(Context)
    const [settingsModal, setSettingsModal] = useState(false)
    const [theme, setTheme] = useState(false)
    const [language, setLanguage] = useState(false)
    const [locationUser, setLocationUser] = useState(false)
    const [youTubeApps, setYouTubeApps] = useState(false)

    const handleClick = () => {
        setHumbergerBtn(!humbergerBtn)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        setSearch(searchValue)
        setSearchPage(!searchPage)
    }

    const handleClickHome = () => {
        setSearch([])
    }

    const handleModalSettings = () => {
        setSettingsModal(!settingsModal)
        setYouTubeApps(false)
    }

    const handleYouTubeApps = () => {
        setYouTubeApps(!youTubeApps)
        setSettingsModal(false)
    }

    const handleTheme = () => {
        setTheme(!theme)
    }

    const handlePrevTheme = () => {
        setTheme(!theme)
    }

    const handleLanguage = () => {
        setLanguage(!language)
    }

    const handlePrevLanguage = () => {
        setLanguage(!language)
    }

    const handleLocation = () => {
        setLocationUser(!locationUser)
    }

    const handlePrevLocation = () => {
        setLocationUser(!locationUser)
    }

    console.log(settingsModal);

    return (
        <header className="header">
            <div className="logo left">
                <button className='humburger__menu' onClick={handleClick}>
                    <i id="menu" className="material-icons">menu</i>
                </button>


                <div onClick={handleClickHome}>
                    <Link to="/">
                        <img className='logo' width="100" src="https://www.freecodecamp.org/news/content/images/2022/01/yt-logo.png" alt="" />
                    </Link>
                </div>
            </div>

            <div className="search center">
                <form onSubmit={e => handlesubmit(e)}>
                    <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search" />
                    <button><i className="material-icons">search</i></button>
                </form>
                <i className="material-icons mic">mic</i>
            </div>

            <div className="icons right">
                <i className="material-icons">videocam</i>
                <button onClick={handleYouTubeApps} className='material__button'>
                    <i className="material-icons">apps</i>
                </button>

                <div className={youTubeApps ? "user__settings-apps" : "user__settings-none"}>
                    <a href='https://tv.youtube.com/welcome/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273&utm_servlet=prod' target="_blank" className={"user__accaunt"}>
                        <img onClick={handlePrevTheme} className='prev__btn' src={youtubetv} alt="" />

                        <h2 className='user__name'>YouTube TV</h2>
                    </a>

                    <a href='https://music.youtube.com/coming-soon/' target="_blank" className={"user__accaunt"}>
                        <img onClick={handlePrevTheme} className='prev__btn' src={youtubemusic} alt="" />

                        <h2 className='user__name'>YouTube Music</h2>
                    </a>

                    <a href='https://www.youtube.com/kids/' target="_blank" className={"user__accaunt"}>
                        <img onClick={handlePrevTheme} className='prev__btn' src={youtubekids} alt="" />

                        <h2 className='user__name'>YouTube Kids</h2>
                    </a>

                    <a href='https://artists.youtube.com/' target="_blank" className={"user__accaunt"}>
                        <img onClick={handlePrevTheme} className='prev__btn' src={youtube} alt="" />

                        <h2 className='user__name'>YouTube for Artists</h2>
                    </a>
                </div>

                <i className="material-icons">notifications</i>
                <button onClick={handleModalSettings} className='material__button'>
                    <i className="material-icons display-this">account_circle</i>
                </button>

                <div className={settingsModal ? "user__settings" : "user__settings-none"}>
                    <div className={theme ? "d-block" : "d-none"}>
                        <div className={"user__accaunt"}>
                            <img onClick={handlePrevTheme} className='prev__btn' src={prev} alt="" />

                            <h2 className='user__name'>Appearance</h2>
                        </div>

                        <div className='user__setting-theme'>
                            <span>Setting applies to this browser only</span>
                            <div className='user__setting-theme-btn'>
                                <button className='user__setting-theme-color'>Dark theme</button>
                                <button className='user__setting-theme-color'>Light theme</button>
                            </div>
                        </div>
                    </div>

                    <div className={language ? "d-block" : "d-none"}>
                        <div className={"user__accaunt"}>
                            <img onClick={handlePrevLanguage} className='prev__btn' src={prev} alt="" />

                            <h2 className='user__name'>Choose your language</h2>
                        </div>

                        <div className='user__setting-theme'>
                            <span>Setting applies to this browser only</span>
                            <div className='user__setting-theme-btn'>
                                <button className='user__setting-theme-color'>O'zbek</button>
                                <button className='user__setting-theme-color'>English</button>
                                <button className='user__setting-theme-color'>Русский</button>
                            </div>
                        </div>
                    </div>

                    <div className={locationUser ? "d-block" : "d-none"}>
                        <div className={"user__accaunt"}>
                            <img onClick={handlePrevLocation} className='prev__btn' src={prev} alt="" />

                            <h2 className='user__name'>Choose your location</h2>
                        </div>

                        <div className='user__setting-theme'>
                            <span>Setting applies to this browser only</span>
                            <div className='user__setting-theme-btn'>
                                <button className='user__setting-theme-color'>O'zbek</button>
                                <button className='user__setting-theme-color'>English</button>
                                <button className='user__setting-theme-color'>Русский</button>
                                <button className='user__setting-theme-color'>Australia</button>
                                <button className='user__setting-theme-color'>Brazil</button>
                                <button className='user__setting-theme-color'>Egypt</button>
                                <button className='user__setting-theme-color'>Germany</button>
                                <button className='user__setting-theme-color'>India</button>
                                <button className='user__setting-theme-color'>Kazakhstan</button>
                            </div>
                        </div>
                    </div>

                    <div className={(theme || language || locationUser) ? "d-none" : "d-block"}>
                        <div className={"user__accaunt"}>
                            <div className='user__account-icon'>
                                T
                            </div>

                            <h2 className='user__name'>Tohir Doniyorov</h2>
                        </div>

                        <div className='user__setting-bottom'>
                            <div className='user__setting-link'>
                                <img className='user__setting-link-icon' src={userIcon} alt="" width="24" height="24" />
                                <p className='user__setting-link-desc'>Your channel</p>
                            </div>
                            <div className='user__setting-link'>
                                <img className='user__setting-link-icon' src={addUser} alt="" width="24" height="24" />
                                <p className='user__setting-link-desc'>Switch account</p>
                            </div>
                            <div className='user__setting-link'>
                                <img className='user__setting-link-icon' src={logout} alt="" width="24" height="24" />
                                <p className='user__setting-link-desc'>Sign out</p>
                            </div>
                        </div>

                        <div className='user__youTube-settings'>
                            <div onClick={handleTheme} className='user__setting-link'>
                                <img className='user__setting-link-icon' src={monthLight} alt="" width="24" height="24" />
                                <p className='user__setting-link-desc'>Appearance: Light</p>
                            </div>
                            <div onClick={handleLanguage} className='user__setting-link'>
                                <img className='user__setting-link-icon' src={translate} alt="" width="24" height="24" />
                                <p className='user__setting-link-desc'>Language: English</p>
                            </div>
                            <div onClick={handleLocation} className='user__setting-link'>
                                <img className='user__setting-link-icon' src={location} alt="" width="24" height="24" />
                                <p className='user__setting-link-desc'>Location: Argentina</p>
                            </div>
                            <div className='user__setting-link'>
                                <img className='user__setting-link-icon' src={secret} alt="" width="24" height="24" />
                                <p className='user__setting-link-desc'>Your data in YouTube</p>
                            </div>
                            <div className='user__setting-link'>
                                <img className='user__setting-link-icon' src={keyboard} alt="" width="24" height="24" />
                                <p className='user__setting-link-desc'>Keyboard shortcuts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
