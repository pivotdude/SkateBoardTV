import React from 'react';
import {useParams} from "react-router-dom";
import VideosList from "../../components/Video/VideosList";
import {VideoModel} from "../../Models";
import video1 from "../Discover/img/video1.png";
import author1 from "../Discover/img/author1.png";

const PlaylistVideo = () => {
    const params = useParams()

    const videos: Array<VideoModel> = [
        {_id: '1', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '2', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '3', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '4', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '5', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '6', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '7', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '8', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    ]

    return (
        <div className='container'>
            <p className='container__title'>Playlist name</p>
            <VideosList videos={videos} display='flex' />
        </div>
    );
};

export default PlaylistVideo;