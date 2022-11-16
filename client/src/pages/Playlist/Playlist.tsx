import React from 'react';
import VideosList from "../../components/Video/VideosList";
import {VideoModel} from "../../Models";
import video1 from "../Discover/img/video1.png";
import author1 from "../Discover/img/author1.png";

const Playlist = () => {
    const videos: Array<VideoModel> = [
        {_id: '1das', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '2as', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '3s', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    ]
    return (
        <div className='container'>
            <p className='container__title'>Playlist</p>
            <VideosList videos={videos} display='flex' />
        </div>
    );
};

export default Playlist;