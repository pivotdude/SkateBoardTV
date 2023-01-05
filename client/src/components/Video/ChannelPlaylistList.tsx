import React from 'react';
import {PlaylistChannelModel} from "../../Models";
import ChannelPlaylist from "./ChannelPlaylist";

interface ChannelPlaylistListProps {
    playlists: Array<PlaylistChannelModel>,
    display: 'block' | 'flex',
}

const ChannelPlaylistList = (props: ChannelPlaylistListProps) => {
    const styles = 'video-list ' + 'video-list_' + props.display

    return (
        <div className={styles}>
            {props.playlists.map(playlist => <ChannelPlaylist playlist={playlist} key={playlist._id} />)}
        </div>
    );
};

export default ChannelPlaylistList;