import React, { useContext } from 'react';
import { Context } from '../../Context/HamburgerBtn';
import { Link } from 'react-router-dom';
import "../Like/Like.scss"
const Like = () => {
    const { chanelVideoNext, setChanelVideoNext } = useContext(Context)
    const { themeColor, setThemeColor } = useContext(Context)

    const ids = chanelVideoNext.map(o => o.id)
    const filtered = chanelVideoNext.filter(({ id }, index) => !ids.includes(id, index + 1))

    const data = Array.from(new Set(chanelVideoNext.map(JSON.stringify))).map(JSON.parse);

    return (
        <div className='like__body'>
            <div className='like__last'>

            </div>
            <div className='like__videos'>
                <div className=''>
                    {
                        filtered?.map((i, index) => {
                            console.log(index);
                            return <Link to={`/${i?.channelId}/${i?.videoId}/${i?.title}/${i?.viewCountText}/${i?.publishedTimeText}/${i?.channelName}`} className='search__result-video ' key={Math.random()}>
                                <div className="video like search__videos like__link">
                                    <div className="history__account-img search__account-img like__video">
                                        <p className='like__index'>{index + 1}</p>

                                        <i className={`material-icons ${themeColor}`}>smart_display</i>
                                    </div>

                                    <div className="details searchs">
                                        <div className="search__titles">
                                            <h3 className='like__title'>
                                                {i?.title}
                                            </h3>

                                        </div>
                                        <div className="author search__author">
                                            <span className=''>{i?.channelName}
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </Link>
                        })
                    }


                </div>
            </div>


        </div>
    );
}

export default Like;
