import React, {useEffect, useState} from 'react';
import followImg from './../VideoPage/img/follow.svg'
import './ChannelAuthorInfo.scss'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {fetchAuthorInfo, fetchSubscriptions, showModal} from "../../redux/actions";
import NotFound from "../404/NotFound";
import sendFetch from "../../utils/sendFetch";
import followImgActive from "../VideoPage/img/activateFollow.svg";

const ChannelAuthorInfo = () => {

    const {channelId} = useParams<string>()
    const dispatch = useDispatch()
    const authorInfo = useSelector((state: StateModel) => state.channel.authorInfo)
    const loading = useSelector((state: StateModel) => state.app.loading)
    const [follow, setFollow] = useState(false)

    useEffect(() => {
        dispatch(fetchAuthorInfo(channelId))
    }, [channelId])

    useEffect(() => {
        if (!loading && authorInfo) {
            setFollow(authorInfo.isSubscriber)
        }
    }, [authorInfo])

    function toggleFollow () {

        if (!localStorage.getItem('token')) {
            return dispatch(showModal('Вы не авторизованы!'))
        }

        if (!follow) {
            sendFetch(`action/channel/follow/${channelId}`)
            authorInfo.subscribersNumbers += 1
        } else {
            sendFetch(`action/channel/unfollow/${channelId}`)
            authorInfo.subscribersNumbers -= 1
        }

        setFollow(prev => !prev)
    }

    console.log(authorInfo)

    if (!authorInfo) {
        return <NotFound />
    }

    return (
        <>
            <img src={authorInfo.channelHeader} alt="Channel header" className='channel-header__cup' />
            <div className='channel-info'>
                <div className='channel-info-author'>
                    <img className='channel-info-author__author-image' src={authorInfo.avatar} alt=""/>
                    <p className='channel-info-author__author-name'>{authorInfo.name}</p>
                    {authorInfo.isAuthor ? <p>Вы автор!</p> : <img className='channel-info-author__follow' onClick={toggleFollow} src={follow ? followImgActive : followImg} alt=""/>}
                </div>
                <p className='channel-info__follows'>{authorInfo.subscribersNumbers} follows</p>
            </div>
        </>
    );
}

export default ChannelAuthorInfo;