import React, {useEffect} from 'react';
import ChannelHeader from "./ChannelHeader";
import {fetchChannelAbout, fetchChannelLikes} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {useParams} from "react-router-dom";
import ChannelVideoList from "../../components/Video/ChannelVideoList";
import VideosList from "../../components/Video/VideosList";

const ChannelLikes = () => {
    const dispatch = useDispatch()
    const {channelId} = useParams<string>()

    let channelLikes = useSelector((state: StateModel) => state.channel.channelLikes)
    const loading = useSelector((state: StateModel) => state.app.loading)

    useEffect(() => {
        dispatch(fetchChannelLikes(channelId))
    }, [])

    if (channelLikes && channelLikes.length == 0) {
        channelLikes = null
    }

    return (
        <div className='container'>
            <ChannelHeader />
            <div>
                {channelLikes ? <VideosList videos={channelLikes} display="flex" /> : <p className='not-found'>Лайкнутых нет</p>}
            </div>
        </div>
    );
};

export default ChannelLikes;