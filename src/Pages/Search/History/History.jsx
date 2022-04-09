import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../../Context/HamburgerBtn';

const History = () => {
    const { historySort, setHistorySort } = useContext(Context)
    const [historyVideo, setHistoryVideo] = useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            'X-RapidAPI-Key': '7306d73337msh7fad6a0fa751d98p10c355jsna8f006a0cd81'
        }
    };

    useEffect(() => {
        historySort?.map(i => {
            fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${i}`, options)
                .then(response => response.json())
                .then(response => setHistoryVideo(response))
                .catch(err => console.error(err));
        });
    }, [historySort])

    console.log(historyVideo);
    return (
        <div>
            {/* <Link onClick={handleClickHome} className='search__result-video' key={Math.random()} to={`/${historyVideo?.items[0]?.snippet?.channelId}/${historyVideo?.items[0].id}/${i?.snippet.title}/${i?.snippet.channelTitle}/${i?.snippet?.publishTime}`}>
                <div className="video search__videos">
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
            </Link> */}
        </div>
    );
}

export default History;
