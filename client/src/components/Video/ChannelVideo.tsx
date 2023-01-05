import React from 'react';
import {Link} from "react-router-dom";
import {VideoChannelModel} from "../../Models";

interface ChannelVideoProps {
    video: VideoChannelModel,
    playlist?: boolean
}

const ChannelVideo = (props: ChannelVideoProps) => {
    return (
        <div className='video'>
            <img className='video__image' src={props.video.preview}/>
            <div className='video-info'>
                <Link to={`/${props.playlist ? 'playlist' : 'video'}/${props.video._id}`} className='video-info__title'>{props.video.title}</Link>
                {!props.playlist &&<p className='video-info__statistic'>{props.video.duration}</p>}
                {props.playlist && <p className='video-info__videos-count'>32 videos</p> }
                <p className='video-info__duration'>{props.video.duration} min</p>
            </div>
        </div>
    );
};

export default ChannelVideo;