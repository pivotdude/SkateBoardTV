import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {StateModel} from "../../Models";

import Loading from "../../components/Loading/Loading";
import {fetchVideoById} from "../../redux/actions";

import './VideoPage.scss'

import sendFetch from './../../utils/sendFetch'
import VideoInfo from "./VideoInfo";
import VideoPlayer from "./VideoPlayer";
import VideoInfoCall from "./VideoInfoCall";

const VideoPage = () => {
    const [url, setUrl] = useState('')
    const {videoId} = useParams()

    function timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function sleep(fn: (videoId: string) => void, videoId: string | undefined) {
        await timeout(5000);
        if (videoId) {
            return fn(videoId);
        }
    }

    function viewedVideo(videoId: string) {
        console.log('Просмотрено видео: ' + videoId)
        const res = sendFetch(`viewing/${videoId}`)
        console.log(res)
    }

    useEffect(() => {
        setUrl(`/videos/${videoId}/dash.mpd`)
        sleep(viewedVideo, videoId)
    }, [videoId])

    return (
        <>
            <div className='container video-page__container'>

                <div className='fullscreen'>
                    <div className='fullscreen-player'>
                        <VideoPlayer url={url}/>
                    </div>

                    <VideoInfoCall videoId={videoId} />
                    {/*<VideoInfo video={video} loading={loading} videoId={videoId} />*/}

                {/*<div className='comments'>*/}
                {/*    <p className='comments__title'>Comments</p>*/}
                {/*    <Comment />*/}
                {/*    <Comment />*/}
                {/*    <Comment />*/}
                {/*    <Comment />*/}
                {/*</div>*/}
                </div>
                <div className='similar'>
                    <p className='similar__title'>Similar</p>
                    {/*<VideosList videos={SimilarVideos} display='flex' />*/}
                </div>
            </div>
        </>
    );
};

export default VideoPage;
