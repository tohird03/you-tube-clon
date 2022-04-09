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
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            'X-RapidAPI-Key': 'ca0086abcdmsh7ba5539aa77e537p136102jsnef030ba1033c'
        }
    };

    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/search?q=${search}&part=snippet%2Cid&regionCode=US&maxResults=100&order=date`, options)
        .then(response => response.json())
        .then(response => setSearchResult(response))
        .catch(err => console.error(err));
    }, [search]);
    return (
        <div className='search__video'>
            {
                searchResult?.items?.map(i => {
                    return <Link onClick={handleClickHome} className='search__result-video' key={Math.random()} to={`/${i?.snippet?.channelId}/${i?.id?.videoId}/${i?.snippet.title}/${i?.snippet.channelTitle}/${i?.snippet?.publishTime}`}>
                            <div  className="video search__videos">
                                <div className=" search__account-img">
                                    <img className='search__account__img' src={i?.snippet?.thumbnails?.medium?.url || notVideo} alt="" />
                                </div>

                                <div className="details searchs">
                                    <div className="title search__titles">
                                        <h3 className='search__video-title'>
                                            {i?.snippet?.title}
                                        </h3>
                                        <span>{i?.snippet?.publishTime} </span>
                                    </div>
                                    <div className="author search__author">
                                        <img src={i?.snippet?.thumbnails?.high.url}
                                            alt="" />

                                         <span className='search__author-span'>{i?.snippet?.channelTitle} </span>
                                    </div>

                                    <div>
                                        <span>{i?.snippet?.description}</span>
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
