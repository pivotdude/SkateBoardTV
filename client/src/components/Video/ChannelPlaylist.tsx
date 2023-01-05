import React from 'react';
import {Link} from "react-router-dom";
import {PlaylistChannelModel} from "../../Models";

interface ChannelPlaylistProps {
    playlist: PlaylistChannelModel
}

const ChannelPlaylist = (props: ChannelPlaylistProps) => {
    return (
        <div className='video'>
            <img className='video__image' src={props.playlist.preview}/>
            <div className='video-info'>
                <Link to={`/playlist/${props.playlist._id}`} className='video-info__title'>{props.playlist.title}</Link>
                {/*<p className='video-info__statistic'>{props.playlist.title}</p>*/}
                <p className='video-info__videos-count'>{props.playlist.count} videos</p>
            </div>
        </div>
    );
};

export default ChannelPlaylist;