import React, {useEffect} from 'react';
import VideosList from "../../components/Video/VideosList";
import author1 from "../Discover/img/author1.png";
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {fetchDiscover, fetchPlaylist} from "../../redux/actions";
import {StateModel} from "../../Models";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../components/Loading/Loading";
import ChannelPlaylistList from "../../components/Video/ChannelPlaylistList";

const Playlist = () => {

    const dispatch = useDispatch()
    const playlists = useSelector((state: StateModel) => state.video.playlistVideos)

    useEffect(() => {
        dispatch(fetchPlaylist())
    }, [])

    return (
        <div className='container'>
            <p className='container__title'>Playlist</p>
            {playlists ? <ChannelPlaylistList playlists={playlists} display='flex' /> : <Loading /> }
            {/*<VideosList videos={videos} display='flex'  />*/}
        </div>
    );
};

export default Playlist;