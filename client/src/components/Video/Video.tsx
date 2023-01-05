import React, {useEffect} from 'react';
import './Video.scss'
import {PreviewVideoModel} from "../../Models";
import {Link, useLocation} from "react-router-dom";
import toNormalDate from './../../utils/dateToNormal'

interface VideoProps {
    video: PreviewVideoModel,
    playlist?: boolean
}


const Video = (props: VideoProps) => {

    // const date =


    // let location = useLocation()
    // useEffect(() => {window.scrollTo(0,0)}, [location])
    return (
        <div className='video'>
            <img className='video__image' src={props.video.preview}/>
            <img className='video__author-image' src={props.video.author.avatar} />
            <div className='video-info'>
                <p className='video-info__author'>{props.video.author.name}</p>
                <Link to={`/${props.playlist ? 'playlist' : 'video'}/${props.video._id}`} className='video-info__title'>{props.video.title}</Link>
                {/*{!props. playlist &&<p className='video-info__statistic'>{props.video.duration}</p>}*/}
                {/*{props.playlist && <p className='video-info__videos-count'>32 videos</p> }*/}
                <p className='video-info__videos-count'>{props.video.views} views  •  {toNormalDate(props.video.date)}</p>
                <p className='video-info__duration'>{props.video.duration} min</p>
            </div>
        </div>
    );
};

export default Video;