import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import './Channel.scss'
import VideosList from "../../components/Video/VideosList";
import {VideoModel} from "../../Models";
import video1 from "../Discover/img/video1.png";
import author1 from "../Discover/img/author1.png";
import ChannelHeader from "./ChannelHeader";

const Channel = () => {

    const {channelId} = useParams<string>()

    useEffect(() => {
        console.log(channelId)

        // dispatch(fetchVideoById(videoId))
    }, [channelId])


    const videos: Array<VideoModel> = [
        {_id: '1506f92c4e4ab', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '2', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '3', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '4', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '5', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '6', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '7', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '8', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '9', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '10', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '11', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '12', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '13', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '14', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '15', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '16', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '17', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '18', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '19', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '20', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '21', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '22', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '23', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5}
    ]

    return (
        <div className='container'>
            <ChannelHeader />


            <div style={{marginTop: '40px'}}>
                <VideosList videos={videos} display='flex' />
            </div>

        </div>
    );
};

export default Channel;