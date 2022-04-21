import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Content from '../../Components/Content/Content';
import { Context } from '../../Context/HamburgerBtn';
import { NavLink } from 'react-router-dom';
import "../AboutChannel/AboutChannel.scss"
import notVideo from "../../Assets/img/not.png"
const Aboutchannel = () => {
    const x = useParams()
    const localChannel = JSON.parse(window.localStorage.getItem('channelAbout'))
    const [channelAbout, setChannelAbout] = useState(localChannel || [])
    const { addChannel, setAddChannel } = useContext(Context)
    const [videoContent, setVideoContent] = useState([])
    const [channelVideo, setChannelVideo] = useState(true)
    const { history, setHistory } = useContext(Context)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            'X-RapidAPI-Key': 'b58c9764e3mshec61f233fed968ep1958fbjsn9edf982a6081'
        }
    };

    //channels statistick
    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${x.channelId}`, options)
            .then(response => response.json())
            .then(response => setChannelAbout(response))
            .catch(err => console.error(err));
    }, [x]);

    // console.log(channelAbout.items[0].brandingSettings.image.bannerExternalUrl);

    const handleAddChanel = (e) => {
        if (!addChannel.includes(e.target.id)) {
            e.target.textContent = "SUBSCRIBED"
            setAddChannel([...addChannel, e.target.id])
        } else if (addChannel.includes(e.target.id)) {
            e.target.textContent = "SUBSCRIBE"
            setAddChannel(addChannel.filter(i => i != e.target.id))
        }
    }

    //channel video
    const optionsVideo = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            'X-RapidAPI-Key': 'b58c9764e3mshec61f233fed968ep1958fbjsn9edf982a6081'
        }
    };

    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${x.channelId}&part=snippet%2Cid&order=date&maxResults=50`, optionsVideo)
            .then(response => response.json())
            .then(response => setVideoContent(response))
            .catch(err => console.error(err));
    }, [x]);

    const hanldeHistory = (e) => {
        history.unshift(e.target.id)
        window.localStorage.setItem('product', JSON.stringify(history))
    }

    console.log(videoContent);
    window.localStorage.setItem('channelAbout', JSON.stringify(channelAbout))
    if (addChannel.length == 0) {
        return <Content />
    } else {
        return (
            <div>
                <img className='add__channel-banner' src={channelAbout?.items[0]?.brandingSettings?.image?.bannerExternalUrl} alt="" />

                <div className='add__channel-hero'>
                    <div className='add__channel-title'>
                        <img className='add__channel-img' width="88" height='88' src={channelAbout?.items[0]?.snippet?.thumbnails?.default?.url} alt="" />

                        <div>
                            <h3>{channelAbout?.items[0]?.snippet?.title}</h3>
                            <p>{channelAbout?.items[0]?.statistics?.subscriberCount} subscribers</p>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleAddChanel} className={addChannel?.includes(`${x?.channelId}/${channelAbout?.items[0]?.snippet?.title}`) ? 'chanelAdd__card-btn addChannelSubscript' : "chanelAdd__card-btn"} id={`${x?.channelId}/${channelAbout?.items[0]?.snippet?.title}`}>{!addChannel?.includes(x) ? "SUBSCRIBE" : "SUBSCRIBED"}</button>
                    </div>
                </div>

                <div className='add__channel-btn'>
                    <button className={channelVideo ? "bg__btn-category" : ""}>VIDEOS</button>
                    <button>COMMUNITY</button>
                    <button>CHANNELS</button>
                    <button>ABOUT</button>
                </div>

                <div className={channelVideo ? "d-block videos add__channel-content" : "d-none"}>
                    {
                        videoContent?.items?.map(i => {
                            const id = `${i.snippet.channelId}/${i.id.videoId}/${i.snippet.title}/${i.snippet.publishedAt}/${i.snippet.publishTime}/${i.snippet.channelTitle}`
                            return <NavLink className="" onClick={hanldeHistory} id={id} key={Math.random()} to={`/${i.snippet.channelId}/${i.id.videoId}/${i.snippet.title}/${i.snippet.publishedAt}/${i.snippet.publishTime}/${i.snippet.channelTitle}`}>
                                <div id={id} className="video add__channel-video">
                                    <div id={id} className="thumbnail">
                                        <p id={id} className="add__channel-category-img">
                                            <img className='add__channel-category-img' id={id} src={i.snippet.thumbnails.default.url}/>
                                        </p>
                                    </div>

                                    <div id={id} className="details">
                                        <div id={id} className="author">
                                            {/* <img id={id} src={i.video.thumbnails[0].url}
                                                alt="" /> */}
                                        </div>
                                        <div id={id} className="title">
                                            <h3 id={id}>
                                                {i.snippet.title}
                                            </h3>
                                            <a id={id} href="">
                                                {i.snippet.channelTitle}
                                            </a>
                                            <span id={id}> {i.snippet.publishedAt} • {i.snippet.liveBroadcastContent} </span>
                                        </div>
                                    </div>

                                </div>
                            </NavLink>
                        })
                    }
                </div>

                <div>
                {
                        // videoContent?.items?.map(i => {
                        //     const id = `${i.snippet.channelId}/${i.id.videoId}/${i.snippet.title}/${i.snippet.publishedAt}/${i.snippet.publishTime}/${i.snippet.channelTitle}`
                        //     return <NavLink onClick={hanldeHistory} id={id} key={Math.random()} to={`/${i.snippet.channelId}/${i.id.videoId}/${i.snippet.title}/${i.snippet.publishedAt}/${i.snippet.publishTime}/${i.snippet.channelTitle}`}>
                        //         <div id={id} className="video">
                        //             <div id={id} className="thumbnail">
                        //                 <p id={id}>
                        //                     <img id={id} src={i.snippet.thumbnails.default.url}/>
                        //                 </p>
                        //             </div>

                        //             <div id={id} className="details">
                        //                 <div id={id} className="author">
                        //                     {/* <img id={id} src={i.video.thumbnails[0].url}
                        //                         alt="" /> */}
                        //                 </div>
                        //                 <div id={id} className="title">
                        //                     <h3 id={id}>
                        //                         {i.snippet.title}
                        //                     </h3>
                        //                     <a id={id} href="">
                        //                         {i.snippet.channelTitle}
                        //                     </a>
                        //                     <span id={id}> {i.snippet.publishedAt} • {i.snippet.liveBroadcastContent} </span>
                        //                 </div>
                        //             </div>

                        //         </div>
                        //     </NavLink>
                        // })
                    }
                </div>
            </div>
        );
    }


}

export default Aboutchannel;
