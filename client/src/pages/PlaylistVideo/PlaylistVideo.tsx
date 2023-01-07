import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import VideosList from "../../components/Video/VideosList";
import video1 from "../Discover/img/video1.png";
import author1 from "../Discover/img/author1.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchPlaylistById} from "../../redux/actions";
import {StateModel} from "../../Models";
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import ChannelPlaylistList from "../../components/Video/ChannelPlaylistList";

const PlaylistVideo = () => {
    const {playlistId} = useParams<string>()
    const dispatch = useDispatch()

    const playlistVideos = useSelector((state: StateModel) => state.video.playlistById)

    useEffect(() => {
        dispatch(fetchPlaylistById(playlistId))
    }, [])

    console.log(playlistVideos)



    // const playlistVideos = useDataByAction(fetchPlaylistById(playlistId), (state: StateModel) => state.video.playlistById)
    // console.log(playlistVideos)


    return (
        <div className='container'>
            <p className='container__title'>Плейлист</p>
            <VideosList videos={playlistVideos} display="flex" />
        </div>
    );
};

export default PlaylistVideo;