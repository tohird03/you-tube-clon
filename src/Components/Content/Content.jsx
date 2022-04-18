import React, { useState, useEffect, useContext } from 'react';
import "../Content/Content.css"
import notVideo from "../../Assets/img/not.png"
import { Link, useParams } from 'react-router-dom';
import { Context } from '../../Context/HamburgerBtn';
import Search from '../../Pages/Search/Search';
const Content = () => {
    const [video, setVideo] = useState([])
    const { search, setSearch } = useContext(Context)
    const { searchPage, setSearchPage } = useContext(Context)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': '7b77d20fbamshbbf1cf1322031e1p1c95d3jsn7edeeca070d0'
        }
    };

    useEffect(() => {
        fetch('https://youtube-search-and-download.p.rapidapi.com/trending?type=C%20g%2C%20n%2C%20mo&hl=en&gl=US', options)
            .then(response => response.json())
            .then(response => setVideo(response))
            .catch(err => console.error(err));
    }, []);

     return (
        <>
            <div className="hhh">
                <button className='trends'>Music</button>
                <button className='trends'>Music</button>
                <button className='trends'>Music</button>
                <button className='trends'>Music</button>
                <button className='trends'>Music</button>
                <button className='trends'>Music</button>
                <button className='trends'>Music</button>
                <button className='trends'>Music</button>
                <button className='trends'>Music</button>
            </div>
            <div className="videos">

                {
                    video?.contents?.map(i => {
                        return <Link key={Math.random()} to={`/${i.video.channelId}/${i.video.videoId}/${i.video.title}/${i.video.viewCountText}/${i.video.publishedTimeText}`}>
                            <div className="video">
                                <div className="thumbnail">
                                    <a href="https://www.youtube.com/">
                                        <img src={i.video.thumbnails.map(i => {
                                            return i.url
                                        }) || notVideo} alt="" />
                                    </a>
                                </div>

                                <div className="details">
                                    <div className="author">
                                        <img src={i.video.thumbnails[0].url}
                                            alt="" />
                                    </div>
                                    <div className="title">
                                        <h3>
                                            {i.video.title}
                                        </h3>
                                        <a href="">
                                            {i.video.channelName}
                                        </a>
                                        <span> {i.video.viewCountText} • {i.video.publishedTimeText} </span>
                                    </div>
                                </div>

                            </div>
                        </Link>

                    })
                }

                {/* https://www.youtube.com/watch?v=zpNZ6GxLlDI */}
            </div>
        </>
    );
}

export default Content;
