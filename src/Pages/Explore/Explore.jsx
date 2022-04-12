import React from 'react';
import "../Explore/Explore.scss"
import trend from "../../Assets/img/trend1.png"
import muzic from "../../Assets/img/muzika.png"
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
        </div>
    );
}

export default Explore;
