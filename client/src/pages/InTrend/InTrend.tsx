import React from 'react';
import video1 from "../Discover/img/video1.png";
import author1 from "../Discover/img/author1.png";
import VideosList from "../../components/Video/VideosList";
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {fetchTrending} from "../../redux/actions";
import {StateModel} from "../../Models";
import Loading from "../../components/Loading/Loading";

const InTrend = () => {
    const [trendingVideos, loading] = useActionForFetchVideo(fetchTrending, (state: StateModel) => state.video.trendingVideos)
    // const videos: Array<VideoModel> = [
    //     {_id: '1das', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    //     {_id: '2as', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    //     {_id: '3s', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    // ]

    return (
        <div className='container InTrend__container'>
            <p className='container__title'>In trends</p>
            <VideosList videos={trendingVideos} display='block' />
        </div>
    );
};

export default InTrend;