import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/HamburgerBtn';
import Search from '../../Pages/Search/Search';
import "../Header/Header.css"
const Header = () => {

    const { search, setSearch } = useContext(Context)
    const [searchValue, setSearchValue] = useState("")
    const { humbergerBtn, setHumbergerBtn } = useContext(Context)
    const { searchPage, setSearchPage } = useContext(Context)
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
                <i className="material-icons">apps</i>
                <i className="material-icons">notifications</i>
                <i className="material-icons display-this">account_circle</i>
            </div>
        </header>
    );
}

export default Header;
