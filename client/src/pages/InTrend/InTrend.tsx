import React from 'react';
import video1 from "../Discover/img/video1.png";
import author1 from "../Discover/img/author1.png";
import VideosList from "../../components/Video/VideosList";

const InTrend = () => {
    // const videos: Array<VideoModel> = [
    //     {_id: '1das', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    //     {_id: '2as', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    //     {_id: '3s', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    // ]

    return (
        <div className='container InTrend__container'>
            <p className='container__title'>In trends</p>
            {/*<VideosList videos={videos} display='block' />*/}
        </div>
    );
};

export default InTrend;