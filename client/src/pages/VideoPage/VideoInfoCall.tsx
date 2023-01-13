import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {useLocation, useParams} from "react-router-dom";
import {fetchVideoById} from "../../redux/actions";
import Loading from "../../components/Loading/Loading";
import VideoInfo from "./VideoInfo";

interface VideoInfoCallProps {
    videoId: any
}

const VideoInfoCall = (props: VideoInfoCallProps) => {

    const dispatch  = useDispatch()
    const video = useSelector((state: StateModel) => state.video.videoById)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)


    const location = useLocation()
    useEffect(() => {window.scrollTo(0,0)}, [location])


    useEffect(() => {
        dispatch(fetchVideoById(props.videoId))
    }, [props.videoId])

    if (loading || !video || !video.author) {
        return <Loading />
    }


    return (
        <div>
            <VideoInfo video={video} loading={loading} videoId={props.videoId} />
        </div>
    );
};

export default VideoInfoCall;