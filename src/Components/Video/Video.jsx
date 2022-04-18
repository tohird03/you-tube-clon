import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../Video/Video.css"
import notVideo from "../../Assets/img/not.png"
import { Context } from '../../Context/HamburgerBtn';
import Search from '../../Pages/Search/Search';
const Video = () => {
    const x = useParams()
    const [video, setVideo] = useState([])
    const [coments, setComents] = useState([])
    const [chanelVideo, setChanelVideo] = useState([])
    const [chanelVideoNext, setChanelVideoNext] = useState([])
    const [searchResultInfo, setSearchResultInfo] = useState([])
    const { history, setHistory } = useContext(Context)
    const { search, setSearch } = useContext(Context)
    const [commentNext, setCommentNext] = useState("")


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': '7b77d20fbamshbbf1cf1322031e1p1c95d3jsn7edeeca070d0'
        }
    };

    useEffect(() => {
        fetch(`https://youtube-search-and-download.p.rapidapi.com/video/comments?id=${x.id}`, options)
            .then(response => response.json())
            .then(response => setComents(response))
            .catch(err => console.error(err));
    }, [x]);
    // ///
    useEffect(() => {
        fetch(`https://youtube-search-and-download.p.rapidapi.com/channel?id=${x.productId}&next=4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%253D&sort=n`, options)
            .then(response => response.json())
            .then(response => setChanelVideo(response))
            .catch(err => console.error(err));
    }, [x]);

    // ///////////////////// video
    const optionsVideo = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': '7b77d20fbamshbbf1cf1322031e1p1c95d3jsn7edeeca070d0'
        }
    };

    useEffect(() => {
        fetch('https://youtube-search-and-download.p.rapidapi.com/trending?type=C%20g%2C%20n%2C%20mo&hl=en&gl=US', optionsVideo)
            .then(response => response.json())
            .then(response => setVideo(response))
            .catch(err => console.error(err));
    }, []);

    //view

    const optionsVideoInfo = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            'X-RapidAPI-Key': '7b77d20fbamshbbf1cf1322031e1p1c95d3jsn7edeeca070d0'
        }
    };

    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${x.id}`, optionsVideoInfo)
            .then(response => response.json())
            .then(response => setSearchResultInfo(response))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        history.push(searchResultInfo)
    }, [searchResultInfo]);
    return (
        <div className='info'>
            <div id='video__content' className='info__content'>
                <iframe className='info__video' src={`https://www.youtube.com/embed/${x.id}?autoplay=1&mute=1`}>
                </iframe>
                <h3 className='info__video-title'>{x.title}</h3>

                <div>
                    <span className='info__video-about'> {searchResultInfo?.items?.map(i => i?.statistics?.viewCount)} views • {x?.publishedTimeText} </span>
                </div>

                <hr className='hr' />

                {
                    coments.comments?.map(i => {
                        return < div key={Math.random()} className="info__desc-details">
                            <div className="author">
                                <img src={i?.authorThumbnails[0].url}
                                    alt="" />
                            </div>
                            <div>
                                <div className="info__desc-title">
                                    <h3 className='info__desc-heading'>
                                        {i?.authorName}
                                    </h3>
                                    {/* <a href="">
                                            {i?.video.channelName}
                                        </a> */}
                                    <span>{i?.publishedTimeText} </span>
                                </div>

                                <div>
                                    {i?.text}
                                </div>
                            </div>
                        </div>

                    })
                }

            </div>
            <div className='chanel-video'>
                {
                    video?.contents?.map(i => {
                        return <Link className='chanel__category-video' key={Math.random()} to={`/${i.video.channelId}/${i.video.videoId}/${i.video.title}/${i.video.viewCountText}/${i.video.publishedTimeText}`}>
                            <div className="chanel__video">
                                <div className="chanel__category-img">
                                    <img className='chanel__imgs' width="168" height="90" src={i.video.thumbnails.map(i => {
                                        return i.url
                                    }) || notVideo} alt="" />
                                </div>

                                <div className="details">
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

            </div>
        </div >
    );
}

export default Video;
