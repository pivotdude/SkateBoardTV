import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './VideoPage.scss'
import like from './img/like.svg'
import dislike from './img/dislike.svg'
import follow from './img/follow.svg'
import author from './../Discover/img/author1.png'
import {newVideoModel, StateModel, VideoModel} from "../../Models";
import video1 from "../Discover/img/video1.png";
import author1 from "../Discover/img/author1.png";
import VideosList from "../../components/Video/VideosList";
import Comment from './Cooment'
import VideoPlayer from "./VideoPlayer";
import {useDispatch, useSelector} from "react-redux";
import {fetchVideoById} from "../../redux/actions";
import NoAvatar from './img/NoAvatar.svg'

const VideoPage = () => {
    const [url, setUrl] = useState('')
    const [toggle, setToggle] = useState(false)
    const dispatch: Function  = useDispatch()
    const video: newVideoModel | any = useSelector((state: StateModel) => state.video.videoById)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)

    const {videoId} = useParams()

    useEffect(() => {
        dispatch(fetchVideoById(videoId))
        setUrl(`/videos/${videoId}/dash.mpd`)
    }, [videoId])

    if (loading) {
        return null
    }

    function showAll() {

        let descr = document.querySelector('.fullscreen-info__description') as HTMLElement
        let button = document.querySelector('.fullscreen-info__description-button') as HTMLElement
        if (!toggle) {
            descr.style.overflow = 'visible'
            descr.style.height = 'auto'
            button.textContent = 'Скрыть описание'

        } else {
            descr.style.overflow = 'hidden'
            descr.style.height = '260px'
            button.textContent = 'Развернуть описание'
        }
        setToggle(prev => !prev)
    }



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


// 20.08.2020  •  2 years ago
    return (
        <div className='container video-page__container'>


            <div className='fullscreen'>

                <div className='fullscreen-player'>
                    <VideoPlayer url={url}/>
                    {/*<Player />*/}
                </div>


                <div className="fullscreen-info">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <p className="fullscreen-info__title">{video.title}</p>



                    </div>
                    <div className='fullscreen-info-author'>

                        <img className='fullscreen-info-author__image' src={NoAvatar} />

                        <p className='fullscreen-info-author__name'>{video.author.name}</p>
                        <p className='fullscreen-info-author__follow-count'>{video.author.subscribersNumbers}</p>
                        <img className='fullscreen-info-author__follow-button' src={follow}/>
                        <div className='fullscreen-info-action'>
                            <div className="fullscreen-info-action__el">
                                <img className='fullscreen-info-action__image' src={like} />
                                <p className='fullscreen-info-action__count'>{video.likes}</p>
                            </div>

                            <div className="fullscreen-info-action__el">
                                <img className='fullscreen-info-action__image' video-action src={dislike} />
                                <p className='fullscreen-info-action__count'>{video.dislikes}</p>
                            </div>

                        </div>
                    </div>
                    <p className='fullscreen-info__date'>{video.date}</p>
                    <p className='fullscreen-info__views'>{video.views} views</p>
                    <pre className='fullscreen-info__description'>{video.description}</pre>
                    <p className='fullscreen-info__description-button' onClick={showAll}>Развернуть описание</p>
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
