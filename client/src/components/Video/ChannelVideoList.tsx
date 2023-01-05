import React from 'react';
import './VideoList.scss'
import {VideoChannelModel} from "../../Models";
import ChannelVideo from "./ChannelVideo";

interface VideosListProps {
    videos: Array<VideoChannelModel>,
    display: 'block' | 'flex',
    playlist?: boolean
}

const VideosList = (props: VideosListProps) => {
    const styles = 'video-list ' + 'video-list_' + props.display

    return (
        <div className={styles}>
            {props.videos.map(video => <ChannelVideo video={video} key={video._id} playlist={props.playlist} />)}
        </div>
    );
};

export default VideosList;