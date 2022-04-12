import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/HamburgerBtn';
import { Link } from 'react-router-dom';
import notVideo from "../../Assets/img/not.png"
import "../Search/Search.css"
const Search = () => {
    const { search, setSearch } = useContext(Context)
    const [searchResult, setSearchResult] = useState([])

    const handleClickHome = () => {
        setSearch([])
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': '7306d73337msh7fad6a0fa751d98p10c355jsna8f006a0cd81'
        }
    };

    useEffect(() => {

        fetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${search}&next=EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%253D&hl=en&gl=US&upload_date=t&type=v&duration=s&features=li%3Bhd&sort=v`, options)
        .then(response => response.json())
        .then(response => setSearchResult(response))
        .catch(err => console.error(err));
    }, [search]);

    console.log();

    return (
        <div className='search__video'>
            {
                searchResult?.contents?.map(i => {
                    return <Link onClick={handleClickHome} className='search__result-video' key={Math.random()} to={`/${i?.video?.channelId}/${i?.video?.videoId}/${i?.video?.title}/${i?.video.channelName}/${i?.video?.publishedTimeText}`}>
                            <div  className="video search__videos">
                                <div className=" search__account-img">
                                    <img className='search__account__img' src={i?.video?.thumbnails[0].url || notVideo} alt="" />
                                </div>

                                <div className="details searchs">
                                    <div className="title search__titles">
                                        <h3 className='search__video-title'>
                                            {i?.video?.title}
                                        </h3>
                                        <span>{i?.video?.viewCountText} • {i?.video?.publishedTimeText} </span>
                                    </div>
                                    <div className="author search__author">
                                        <img src={i?.video?.thumbnails[0].url || notVideo}
                                            alt="" />

                                         <span className='search__author-span'>{i?.video?.channelName} </span>
                                    </div>

                                    <div>
                                        <span>{i?.video?.description}</span>
                                    </div>
                                </div>

                            </div>
                        </Link>
                })
            }
        </div>
    );
}

export default Search;
