import React, {useEffect} from 'react';
import ChannelHeader from "./ChannelHeader";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {StateModel} from "../../Models";
import {fetchChannelVideos, fetchViewedOnTheChannel} from "../../redux/actions";
import VideosList from "../../components/Video/VideosList";

const ChannelVideos = () => {

    const dispatch = useDispatch()
    const videos = useSelector((state: StateModel) => state.channel.channelViewed)
    const {channelId} = useParams<string>()

    useEffect(() => {
        if (channelId) {
            dispatch(fetchViewedOnTheChannel(channelId))
        }
    }, [])

    console.log(videos)



    return (
        <div className='container'>
            <ChannelHeader />
            <div>
                {videos ? <VideosList videos={videos} display="flex" /> : <p className='not-found'>Видео нет</p>}
            </div>


        </div>
    );
};

export default ChannelVideos;