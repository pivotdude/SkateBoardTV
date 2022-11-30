import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './VideoPage.scss'
import like from './img/like.svg'
import dislike from './img/dislike.svg'
import follow from './img/follow.svg'
import author from './../Discover/img/author1.png'
import {StateModel, VideoModel} from "../../Models";
import video1 from "../Discover/img/video1.png";
import author1 from "../Discover/img/author1.png";
import VideosList from "../../components/Video/VideosList";
import Comment from './Cooment'
import VideoPlayer from "./VideoPlayer";
import {useDispatch, useSelector} from "react-redux";
import {fetchVideoById} from "../../redux/actions";

const VideoPage = () => {
    // const [link, setLink] = useState('');
    // const location = useLocation()
    // useEffect( () => {
    //     setLink(location.pathname.replace('/video/', ''))
    //     console.log(link)
    // }, [location])

    const dispatch: Function  = useDispatch()
    const videos = useSelector((state: StateModel) => state.video.video) // : Array<VideoModel>
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)


    const params = useParams()
    useEffect(() => {
        let videoid = params.videoId
        console.log(videoid)
        dispatch(fetchVideoById(videoid))
        // console.log(videos)
    }, [params])

    const SimilarVideos: Array<VideoModel> = [
        {_id: '1', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '2', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '3', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '4', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '5', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '6', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '7', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
        {_id: '8', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    ]

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='container video-page__container'>


            <div className='fullscreen'>

                <div className='fullscreen-player'>
                    <VideoPlayer />
                    {/*<Player />*/}
                </div>


                <div className="fullscreen-info">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <p className="fullscreen-info__title">skateboard and tricking him</p>

                        <div className='fullscreen-info-action'>
                            <img className='fullscreen-info-action__el' src={like} />
                            <img className='fullscreen-info-action__el' video-action src={dislike} />
                        </div>

                    </div>
                    <div className='fullscreen-info-author'>
                        <img className='fullscreen-info-author__image' src={author} />
                        <p className='fullscreen-info-author__name'>Budi Hakim</p>
                        <img className='fullscreen-info-author__follow-button' src={follow}/>
                    </div>
                    <p className='fullscreen-info__date'>20.08.2020  •  2 years ago</p>
                    <p className='fullscreen-info__views'>53600 views</p>
                    <p className='fullscreen-info__description'>this video show him how make a tricks with a skate board and hard makings this video show him how make a tricks with a skate board and hard makings this video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makingsthis video show him how make a tricks with a skate board and hard makings</p>
                </div>
            </div>

            <div className='similar'>
                <p className='similar__title'>Similar</p>
                <VideosList videos={SimilarVideos} display='flex' />
            </div>

            <div className='comments'>
                <p className='comments__title'>Comments</p>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>


        </div>
    );
};

export default VideoPage;
