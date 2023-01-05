import React, {useEffect} from 'react';
import follow from './../VideoPage/img/follow.svg'
import './ChannelAuthorInfo.scss'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {fetchAuthorInfo} from "../../redux/actions";
import NotFound from "../404/NotFound";

const ChannelAuthorInfo = () => {

    const {channelId} = useParams<string>()
    const dispatch = useDispatch()
    const authorInfo = useSelector((state: StateModel) => state.channel.authorInfo)
    //
    useEffect(() => {
        // Rerender by link :(
        dispatch(fetchAuthorInfo(channelId))
        // console.log(authorInfo)
    }, [channelId])

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
                    <img className='channel-info-author__follow' src={follow} alt=""/>
                </div>
                <p className='channel-info__follows'>{authorInfo.subscribersNumbers} follows</p>
            </div>
        </>
    );
}

export default ChannelAuthorInfo;