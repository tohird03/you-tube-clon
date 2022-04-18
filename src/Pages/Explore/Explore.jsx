import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Explore/Explore.scss"
import notVideo from "../../Assets/img/not.png"
import trend from "../../Assets/img/trend1.png"
import muzic from "../../Assets/img/music-dark.png"
import live from "../../Assets/img/trend2.png"
import gameng from "../../Assets/img/game.png"
import news from "../../Assets/img/news.png"
import sports from "../../Assets/img/sports.png"
import learning from "../../Assets/img/learning.png"
import fashion from "../../Assets/img/fashion.png"
const Explore = () => {

    const handleClick = (e) => {
        console.log(e.target.textContent);
    }

    const [video, setVideo] = useState([])
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    //         'X-RapidAPI-Key': '7306d73337msh7fad6a0fa751d98p10c355jsna8f006a0cd81'
    //     }
    // };

    // useEffect(() => {
    //     fetch('https://youtube-search-and-download.p.rapidapi.com/trending?type=C%20g%2C%20n%2C%20mo&hl=en&gl=US', options)
    //         .then(response => response.json())
    //         .then(response => setVideo(response))
    //         .catch(err => console.error(err));
    // }, []);

    return (
        <div className='explore'>
            <div onClick={e => handleClick(e)} className='explore__category'>
                <div className='explore__card'>
                    <img className="explore__card-img" src={trend} alt="" width="32" height="32" />
                    <h3 className='explore__card-heading'>Trending</h3>
                </div>
                <div className='explore__card'>
                    <img className="explore__card-img" src={muzic} alt="" width="32" height="32" />
                    <h3 className='explore__card-heading'>Muzic</h3>
                </div>
                <div className='explore__card'>
                    <img className="explore__card-img" src={live} alt="" width="32" height="32" />
                    <h3 className='explore__card-heading'>Live</h3>
                </div>
                <div className='explore__card'>
                    <img className="explore__card-img" src={gameng} alt="" width="32" height="32" />
                    <h3 className='explore__card-heading'>Gameng</h3>
                </div>
                <div className='explore__card'>
                    <img className="explore__card-img" src={news} alt="" width="32" height="32" />
                    <h3 className='explore__card-heading'>News</h3>
                </div>
                <div className='explore__card'>
                    <img className="explore__card-img" src={sports} alt="" width="32" height="32" />
                    <h3 className='explore__card-heading'>Sports</h3>
                </div>
                <div className='explore__card'>
                    <img className="explore__card-img" src={learning} alt="" width="32" height="32" />
                    <h3 className='explore__card-heading'>Learning</h3>
                </div>
                <div className='explore__card'>
                    <img className="explore__card-img" src={fashion} alt="" width="32" height="32" />
                    <h3 className='explore__card-heading'>Fashion & Beauty</h3>
                </div>
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
        </div>
    );
}

export default Explore;
