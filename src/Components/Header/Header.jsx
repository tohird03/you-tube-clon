import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../Context/HamburgerBtn';
import youTUbeLanguage from '../Localization/Language';
import "../Header/Header.css"
import Search from '../../Pages/Search/Search';
import userIcon from "../../Assets/img/user.png"
import addUser from "../../Assets/img/add-user.png"
import logout from "../../Assets/img/logout.png"
import monthLight from "../../Assets/img/light-moon.png"
import monthdark from "../../Assets/img/moon.png"
import translate from "../../Assets/img/translate.png"
import location from "../../Assets/img/location.png"
import secret from "../../Assets/img/secret.png"
import keyboard from "../../Assets/img/klavish.png"
import prev from "../../Assets/img/prev.png"
import youtubetv from "../../Assets/img/youtubetv.png"
import youtubemusic from "../../Assets/img/youtubemusic.png"
import youtubekids from "../../Assets/img/youtubekids.png"
import youtube from "../../Assets/img/youtube.png"
import youtubeLogos from "../../Assets/img/youtubeLogos.png"
const Header = (props) => {
    const { addChannel, setAddChannel } = useContext(Context)
    const { search, setSearch } = useContext(Context)
    const { userAbboutAccount, setUserAbboutAccount } = useContext(Context)
    const [searchValue, setSearchValue] = useState("")
    const { humbergerBtn, setHumbergerBtn } = useContext(Context)
    const { searchPage, setSearchPage } = useContext(Context)
    const { themeColor, setThemeColor } = useContext(Context)
    const { languages, setLanguages } = useContext(Context)
    const [settingsModal, setSettingsModal] = useState(false)
    const [theme, setTheme] = useState(false)
    const [language, setLanguage] = useState(false)
    const [locationUser, setLocationUser] = useState(false)
    const [youTubeApps, setYouTubeApps] = useState(false)
    const [keyboard, setKeyboard] = useState(false)
    const [handleSwitchAccount, setHandleSwitchAccount] = useState(false)



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

    const handleDark = () => {
        setThemeColor("dark")
    }

    const handleLight = () => {
        setThemeColor("light")
    }
    const handleLanguageType = (e) => {
        setLanguages(e.target.id);
    }

    const handleKeyboard = () => {
        setKeyboard(!keyboard)
    }
    const handlePrevKeyboard = () => {
        setKeyboard(!keyboard)
    }

    const handleSwitch = () => {
        setHandleSwitchAccount(!handleSwitchAccount)
    }

    const handlePrevSwitchAccount = () => {
        setHandleSwitchAccount(!handleSwitchAccount)
    }
    const languageHeaderObj = youTUbeLanguage.header[languages]

    const handleUserAccountCheck = (e) => {
        const findElement = userAbboutAccount.findIndex(function(element) {
            return element.userAddEmail == e.userAddEmail
        })

        const sliceUserCHeck = userAbboutAccount.splice(findElement, 1)
        setUserAbboutAccount([...userAbboutAccount, ...sliceUserCHeck])
    }
    return (<>

        <header className={`header ${themeColor}`}>
            <div className="logo left">
                <button className='humburger__menu' onClick={handleClick}>
                    <i id="menu" className={`material-icons humburger__menu-icon ${themeColor}`}>menu</i>
                </button>



                <div onClick={handleClickHome}>
                    <Link className='youtube__logo' to="/">
                        <img className='logo' width="28" src={youtubeLogos} alt="" />
                        <h2 className='youtube__logoName'>YouTube</h2>
                    </Link>
                </div>
            </div>

            <div className="search center">
                <form className={themeColor == "dark" ? "bg__black" : "bg__light"} onSubmit={e => handlesubmit(e)}>
                    <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder={languageHeaderObj?.inputPlaceholder} />
                    <button className={`${themeColor}`}><i className="material-icons">search</i></button>
                </form>
                <i className={`material-icons mic ${themeColor}`}>mic</i>
            </div>

            <div className={`icons right`}>
                <i className={`material-icons ${themeColor}`}>videocam</i>
                <button onClick={handleYouTubeApps} className='material__button'>
                    <i className={`material-icons ${themeColor}`}>apps</i>
                </button>

                <div className={youTubeApps ? `user__settings-apps ${themeColor}` : ` ${themeColor} user__settings-none`}>
                    <a href='https://tv.youtube.com/welcome/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273&utm_servlet=prod' target="_blank" className={"user__accaunt"}>
                        <img onClick={handlePrevTheme} className='prev__btn' src={youtubetv} alt="" />

                        <h2 className='user__name'>{languageHeaderObj?.youTubeTv}</h2>
                    </a>

                    <a href='https://music.youtube.com/coming-soon/' target="_blank" className={"user__accaunt"}>
                        <img onClick={handlePrevTheme} className='prev__btn' src={youtubemusic} alt="" />

                        <h2 className='user__name'>{languageHeaderObj?.youTubeMusic}</h2>
                    </a>

                    <a href='https://www.youtube.com/kids/' target="_blank" className={"user__accaunt"}>
                        <img onClick={handlePrevTheme} className='prev__btn' src={youtubekids} alt="" />

                        <h2 className='user__name'>{languageHeaderObj?.youTubeChild}</h2>
                    </a>

                    <a href='https://artists.youtube.com/' target="_blank" className={"user__accaunt"}>
                        <img onClick={handlePrevTheme} className='prev__btn' src={youtube} alt="" />

                        <h2 className='user__name'>{languageHeaderObj?.youTubeArtist}</h2>
                    </a>
                </div>

                <i className={`material-icons ${themeColor}`}>notifications</i>

                <button onClick={handleModalSettings} className={`material__button ${themeColor}`}>
                    <i className={`material-icons display-this ${themeColor}`}>account_circle</i>
                </button>

                <div className={settingsModal ? `${themeColor} user__settings` : ` ${themeColor} user__settings-none`}>
                    <div className={theme ? `d-block ${themeColor} user__setting-border` : `d-none ${themeColor} user__setting-border`}>
                        <div className={"user__accaunt"}>
                            <i onClick={handlePrevTheme} className={`material-icons mic ${themeColor}`}>arrow_back</i>
                            <h2 className='user__name'>{languageHeaderObj?.themeNameUser}</h2>
                        </div>

                        <div className={`user__setting-theme ${themeColor}`}>
                            <span className={`${themeColor}`}>
                                {languageHeaderObj?.themeAboutUser}
                            </span>
                            <div className='user__setting-theme-btn'>
                                <button id={themeColor == "dark" ? "settings__active" : ""} onClick={handleDark} className={`${themeColor} user__setting-theme-color`}>
                                    {languageHeaderObj?.themeUserDark}
                                </button>
                                <button id={themeColor == "light" ? "settings__active" : ""} onClick={handleLight} className={`user__setting-theme-color ${themeColor}`}>
                                    {languageHeaderObj?.themeUserLight}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={language ? `${themeColor} d-block user__setting-border` : `d-none ${themeColor} user__setting-border`}>
                        <div className={"user__accaunt"}>
                            <i onClick={handlePrevLanguage} className={`material-icons mic ${themeColor}`}>arrow_back</i>
                            <h2 className={`${themeColor} user__name`}>
                                {languageHeaderObj?.languageUser}
                            </h2>
                        </div>

                        <div className='user__setting-theme'>
                            <span className={`${themeColor}`}>
                                {languageHeaderObj?.themeAboutUser}
                            </span>
                            <div className='user__setting-theme-btn'>
                                <button onClick={handleLanguageType} id="uz" className={`${themeColor} ${languages == "uz" ? "settings__active" : ""} user__setting-theme-color`}>
                                    O'zbek
                                </button>
                                <button onClick={handleLanguageType} id="eng" className={`${themeColor} ${languages == "eng" ? "settings__active" : ""} user__setting-theme-color`}>
                                    English
                                </button>
                                <button onClick={handleLanguageType} id="ru" className={`${themeColor} ${languages == "ru" ? "settings__active" : ""} user__setting-theme-color`}>
                                    Русский
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={locationUser ? `${themeColor} d-block user__setting-border` : `d-none ${themeColor} user__setting-border`}>
                        <div className={"user__accaunt"}>
                            <i onClick={handlePrevLocation} className={`material-icons mic ${themeColor}`}>arrow_back</i>
                            <h2 className='user__name'>
                                {languageHeaderObj?.locationNameUser}
                            </h2>
                        </div>

                        <div className='user__setting-theme'>
                            <span className={`${themeColor}`}>
                                {languageHeaderObj?.locationNameUser}
                            </span>
                            <div className='user__setting-theme-btn'>
                                <button className={`user__setting-theme-color ${themeColor}`}>O'zbek</button>
                                <button className={`user__setting-theme-color ${themeColor}`}>English</button>
                                <button className={`user__setting-theme-color ${themeColor}`}>Русский</button>
                                <button className={`user__setting-theme-color ${themeColor}`}>Australia</button>
                                <button className={`user__setting-theme-color ${themeColor}`}>Brazil</button>
                                <button className={`user__setting-theme-color ${themeColor}`}>Egypt</button>
                                <button className={`user__setting-theme-color ${themeColor}`}>Germany</button>
                                <button className={`user__setting-theme-color ${themeColor}`}>India</button>
                                <button className={`user__setting-theme-color ${themeColor}`}>Kazakhstan</button>
                            </div>
                        </div>
                    </div>

                    <div className={handleSwitchAccount ? `${themeColor} d-block user__setting-border` : `d-none ${themeColor} user__setting-border`}>
                        <div className={"user__accaunt"}>
                            <i onClick={handlePrevSwitchAccount} className={`material-icons mic ${themeColor}`}>arrow_back</i>
                            <h2 className='user__name'>
                                Accounts
                            </h2>
                        </div>

                        <div className='user__setting-theme-switch'>
                            <span className={`${themeColor}`}>
                                {userAbboutAccount.length > 0 ? userAbboutAccount[userAbboutAccount.length - 1]?.userAddName : userAbboutAccount[0]?.userAddName}
                            </span>
                            <br />
                            <span className='user__switch-account-email'>
                                {userAbboutAccount.length > 0 ? userAbboutAccount[userAbboutAccount.length - 1]?.userAddEmail : userAbboutAccount[0]?.userAddEmail}
                            </span>

                            <hr />

                            <div className={userAbboutAccount.length == 0 ? "d-none user__accaunt-switch" : "d-block user__accaunt-switch"}>
                                <div id={`#${userAbboutAccount[0]?.accountBg}`} style={userAbboutAccount.length > 0 ? {backgroundColor: `${userAbboutAccount[userAbboutAccount.length - 1]?.accountBg}`} : userAbboutAccount[0]?.accountBg}
                                className='user__account-icon-switch'>
                                    {userAbboutAccount.length > 0 ? userAbboutAccount[userAbboutAccount.length - 1]?.userAddName?.split("")[0] : userAbboutAccount[0]?.userAddName?.split("")[0]}
                                </div>

                                <div>
                                    <h2 className='user__name'>{userAbboutAccount.length > 0 ? userAbboutAccount[userAbboutAccount.length - 1]?.userAddName : userAbboutAccount[0]?.userAddName}</h2>
                                </div>
                            </div>
                        </div>
                        <hr className='user__switch-hr' />
                        <div className='user__other'>
                            <span className='user__other-desc'>Other accounts</span>

                            {
                                userAbboutAccount?.slice(0, userAbboutAccount.length - 1).map(i => {
                                    return <div onClick={e => handleUserAccountCheck(i)} className='user__other-account-email'>
                                        <span className='user__other-account-addEMail'>{i.userAddEmail}</span>
                                        <div className={userAbboutAccount.length == 0 ? "d-none user__accaunt-other" : "d-block user__accaunt-other"}>
                                            <div style={{backgroundColor: `${i.accountBg}`}} className='user__account-icon-switch-other'>
                                                {i?.userAddName?.split("")[0]}
                                            </div>

                                            <div>
                                                <h2 className='user__name'>{i.userAddName}</h2>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className={(theme || language || locationUser || keyboard || handleSwitchAccount) ? `${themeColor} d-none user__setting-border` : `${themeColor} d-block user__setting-border`}>
                        <div className={userAbboutAccount.length == 0 ? "d-none user__accaunt" : "d-block user__accaunt"}>
                            <div className='user__account-icon'>
                                {userAbboutAccount.length > 0 ? userAbboutAccount[userAbboutAccount.length - 1]?.userAddName?.split("")[0] : userAbboutAccount[0]?.userAddName?.split("")[0]}

                            </div>

                            <div>
                                <h2 className='user__name'>{userAbboutAccount.length > 0 ? userAbboutAccount[userAbboutAccount.length - 1]?.userAddName : userAbboutAccount[0]?.userAddName}</h2>
                                <a target="_blank" href="https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=en&pli=1">Manage your Google Account</a>
                            </div>
                        </div>

                        <div className='user__setting-bottom'>
                            <NavLink to="/login" className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>login</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.loginUserYouTubeAccount}
                                </p>
                            </NavLink>

                            <div className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>account_circle</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.chanelUser}
                                </p>
                            </div>
                            <div onClick={handleSwitch} className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>account_box</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.switchUser}
                                </p>
                            </div>
                            <div className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>logout</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.loginUser}
                                </p>
                            </div>
                        </div>

                        <div className='user__youTube-settings'>
                            <div onClick={handleTheme} className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>mode_night</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.themeUser}  {themeColor == "dark" ? languageHeaderObj?.themeUserDark : languageHeaderObj?.themeUserLight}
                                </p>
                            </div>
                            <div onClick={handleLanguage} className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>translate</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.languageUser}: {languages == "uz" ? "O'zbek" : languages == "ru" ? "Русский" : "English"}
                                </p>
                            </div>
                            <div onClick={handleLocation} className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>language</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.locationUser}: Argentina</p>
                            </div>
                            <div className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>person_pin_circle</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.dataUser}
                                </p>
                            </div>
                            <div onClick={handleKeyboard} className='user__setting-link'>
                                <i className={`material-icons mic ${themeColor}`}>keyboard_alt</i>
                                <p className='user__setting-link-desc'>
                                    {languageHeaderObj?.keyboardUser}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </header>

        {/* //User keyboard body modal */}
        <div className={keyboard ? "bg__blur-modal" : ``}></div>
        <div className={themeColor}>
            <div className={keyboard ? `${themeColor} keyboard d-block` : `keyboard d-none ${themeColor}`}>
                <div className={"user__keyboard-modal d-fixed"}>
                    <h2 className='user__keyboard-modal-heading'>
                        Keyboard shortcuts
                    </h2>
                </div>

                <div className='user__keyboard-modal-type'>
                    <div className='user__keyboard-modal-body'>
                        <p className='user__keyboard-heading'>PLAYBACK</p>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Toggle play/pause</p>
                            <p className='user__keyboard-code'>k</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Rewind 10 seconds</p>
                            <p className='user__keyboard-code'>j</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Fast forward 10 seconds</p>
                            <p className='user__keyboard-code'>l</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Previous video</p>
                            <p className='user__keyboard-code'>P (SHIFT+p)</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Next video</p>
                            <p className='user__keyboard-code'>N (SHIFT+n)</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Previous frame (while paused)</p>
                            <p className='user__keyboard-code'>,</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Next frame (while paused)</p>
                            <p className='user__keyboard-code'>.</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Decrease playback rate</p>
                            <p className='user__keyboard-code'><pre>{"<"} (SHIFT+,)</pre> </p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Increase playback rate</p>
                            <p className='user__keyboard-code'><pre>{">"} (SHIFT+.)</pre></p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Seek to specific point in the video (7 advances to 70% of duration)</p>
                            <p className='user__keyboard-code'>0..9</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Seek to previous chapter</p>
                            <p className='user__keyboard-code'>CONTROL + ←</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Seek to next chapter</p>
                            <p className='user__keyboard-code'>CONTROL + →</p>
                        </div>
                    </div>
                    <div className='user__keyboard-modal-body'>
                        <p className='user__keyboard-heading'>GENERAL</p>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Toggle full screen</p>
                            <p className='user__keyboard-code'>f</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Toggle theater mode</p>
                            <p className='user__keyboard-code'>t</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Toggle miniplayer</p>
                            <p className='user__keyboard-code'>i</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Close miniplayer or current dialog</p>
                            <p className='user__keyboard-code'>ESCAPE</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Toggle mute</p>
                            <p className='user__keyboard-code'>m</p>
                        </div>
                    </div>
                    <div className='user__keyboard-modal-body'>
                        <p className='user__keyboard-heading'>SUBTITLES AND CLOSED CAPTIONS</p>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>If the video supports captions, toggle captions ON/OFF</p>
                            <p className='user__keyboard-code'>c</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Rotate through different text opacity levels</p>
                            <p className='user__keyboard-code'>o</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Rotate through different window opacity levels</p>
                            <p className='user__keyboard-code'>w</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Rotate through font sizes (increasing)</p>
                            <p className='user__keyboard-code'>+</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Rotate through font sizes (decreasing)</p>
                            <p className='user__keyboard-code'>-</p>
                        </div>
                    </div>
                    <div className='user__keyboard-modal-body'>
                        <p className='user__keyboard-heading'>SPHERICAL VIDEOS</p>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Pan up</p>
                            <p className='user__keyboard-code'>w</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Pan left</p>
                            <p className='user__keyboard-code'>a</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Pan down</p>
                            <p className='user__keyboard-code'>s</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Pan right</p>
                            <p className='user__keyboard-code'>d</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Zoom in</p>
                            <p className='user__keyboard-code'>+ on numpad or ]</p>
                        </div>
                        <span className='user__keyboard-type-hr'></span>
                        <div className='user__keyboard-type'>
                            <p className='user__keyboard-heading'>Zoom out</p>
                            <p className='user__keyboard-code'>- on numpad or [</p>
                        </div>
                    </div>
                </div>

                <div className={"user__keyboard-modal-prev d-fixed"}>
                    <button onClick={handlePrevKeyboard} className='user__keyboard-modal-btn'>DISMISS</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Header;
