import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context/HamburgerBtn';

const History = () => {
    // const { historySort, setHistorySort } = useContext(Context)
    const [historyVideo, setHistoryVideo] = useState([])
    const { history, setHistory } = useContext(Context)

    console.log(history);

    const data = Array.from(new Set(history.map(JSON.stringify))).map(JSON.parse);

    data?.map(i => {
        console.log(i.split("/"));
        // setHistoryVideo()
    })

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
