import React, {useEffect, useState} from 'react';
import './ChannelNavBar.scss'
import {useLocation, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import NotFound from "../404/NotFound";
import {useSelector} from "react-redux";
import {StateModel} from "../../Models";

const ChannelNavBar = () => {
    const location = useLocation()
    const {channelId} = useParams()
    const [link, setLink] = useState('')

    useEffect(() => {
        setLink(location.pathname.replace(/channel\/[a-z0-9]{1,}\//, '').replace('/', ''))
    }, [location])


    const authorInfo = useSelector((state: StateModel) => state.channel.authorInfo)

    if (!authorInfo) {
        return null
    }

    return (
        <div className='channel-full-nav-bar'>
            <div className='channel-nav-bar'>
                <Link to={`/channel/${channelId}/`} className={'channel-nav-bar__link ' + ((link == '') ? 'channel-nav-bar__link_active' : '')}>Главная</Link>
                <Link to={`/channel/${channelId}/videos`} className={'channel-nav-bar__link ' + ((link == 'videos') ? 'channel-nav-bar__link_active' : '')}>Видео</Link>
                <Link to={`/channel/${channelId}/playlists`}  className={'channel-nav-bar__link ' + ((link == 'playlists') ? 'channel-nav-bar__link_active' : '')}>Плейлисты</Link>
                <Link to={`/channel/${channelId}/likes`}  className={'channel-nav-bar__link ' + ((link == 'likes') ? 'channel-nav-bar__link_active' : '')}>Лайкнутые</Link>
                <Link to={`/channel/${channelId}/subscribes`}  className={'channel-nav-bar__link ' + ((link == 'subscribes') ? 'channel-nav-bar__link_active' : '')}>Подписки</Link>
                <Link to={`/channel/${channelId}/about`} className={'channel-nav-bar__link ' + ((link == 'about') ? 'channel-nav-bar__link_active' : '')}>О канале</Link>
            </div>
        </div>

    );
};

export default ChannelNavBar;