import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context/HamburgerBtn';
import "../AddChanel/Chanel.scss"
const Chanel = () => {
    const [chanel, setChanel] = useState([])
    const [chanelFilter, setChanelFilter] = useState([])
    const { addChannel, setAddChannel } = useContext(Context)
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    //         'X-RapidAPI-Key': '7306d73337msh7fad6a0fa751d98p10c355jsna8f006a0cd81'
    //     }
    // };

    // useEffect(() => {
    //     fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50', options)
    //         .then(response => response.json())
    //         .then(response => setChanel(response))
    //         .catch(err => console.error(err));
    // }, []);


    useEffect(() => {
        setChanelFilter(chanel?.items?.filter(i => i.snippet))
    }, [chanel]);
    const handleAddChanel = (e) => {
        console.log(e.target.textContent);
        if (!addChannel.includes(e.target.id)) {
            e.target.textContent = "SUBSCRIBED"
            setAddChannel([...addChannel, e.target.id])
        }else if(addChannel.includes(e.target.id)) {
            e.target.textContent = "SUBSCRIBE"
            setAddChannel(addChannel.filter(i => i != e.target.id))
        }
    }
    console.log(addChannel);
    return (
        <div className='chanelAdd'>
            {
                chanelFilter?.map(i => {
                    return <div className='chanelAdd__card'>
                        <NavLink to="/" className='chanelAdd__link'>
                            <img className='chanelAdd__card-img' width={"103"} height="103" src={i?.snippet?.thumbnails?.standard?.url || i?.snippet?.thumbnails?.default.url} alt="" />
                            <p>{i.snippet.channelTitle}</p>
                        </NavLink>
                        <button onClick={handleAddChanel} className={addChannel.includes(i.snippet.channelId) ? 'chanelAdd__card-btn addChannelSubscript' : "chanelAdd__card-btn"} id={i.snippet.channelId}>{!addChannel.includes(i.snippet.channelId) ? "SUBSCRIBE" : "SUBSCRIBED"}</button>
                    </div>
                })
            }

        </div>
    );
}

export default Chanel;
