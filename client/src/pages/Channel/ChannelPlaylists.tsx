import React, {useEffect} from 'react';
import ChannelHeader from "./ChannelHeader";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {StateModel} from "../../Models";
import {fetchChannelAbout, fetchChannelPlaylists, fetchChannelVideos} from "../../redux/actions";
import ChannelVideoList from "../../components/Video/ChannelVideoList";
import ChannelPlaylistList from "../../components/Video/ChannelPlaylistList";

const ChannelPlaylists = () => {

    const dispatch = useDispatch()
    const {channelId} = useParams<string>()

    const channelPlaylists = useSelector((state: StateModel) => state.channel.channelPlaylist)

    useEffect(() => {
        dispatch(fetchChannelPlaylists(channelId))
    }, [])

    if (channelPlaylists.playlists?.length == 0) {
        channelPlaylists.playlists = null
    }

    return (
        <div className='container'>
            <ChannelHeader />
            <div>
                {channelPlaylists.playlists ? <ChannelPlaylistList playlists={channelPlaylists.playlists} display="flex" /> : <p className='not-found'>Плейлистов нет</p>}
            </div>


        </div>
    );
};

export default ChannelPlaylists;