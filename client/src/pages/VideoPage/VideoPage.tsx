import React, {useEffect, useRef, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {StateModel} from "../../Models";

import Loading from "../../components/Loading/Loading";
import VideosList from "../../components/Video/VideosList";
import Comment from './Cooment'
import VideoPlayer from "./VideoPlayer";
import {fetchVideoById} from "../../redux/actions";

import './VideoPage.scss'

import likeImg from './img/like.svg'
import likeImgActive from './img/activateLike.svg'
import dislikeImg from './img/dislike.svg'
import dislikeImgActive from './img/activateDislike.svg'
import followImg from './img/follow.svg'
import followImgActive from './img/activateFollow.svg'

const VideoPage = () => {
    const [url, setUrl] = useState('')
    const [toggle, setToggle] = useState(false)

    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)
    const [follow, setFollow] = useState(false)

    const dispatch: Function  = useDispatch()
    const video = useSelector((state: StateModel) => state.video.videoById)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)

    const location = useLocation()
    useEffect(() => {window.scrollTo(0,0)}, [location])

    const BtnDescribe = useRef<HTMLAnchorElement>(null)
    const Describe = useRef<HTMLParagraphElement>(null)
    const {videoId} = useParams()

    useEffect(() => {
        dispatch(fetchVideoById(videoId))
        setUrl(`/videos/${videoId}/dash.mpd`)
    }, [videoId])

    if (loading || !video || !video.author) {
        return <Loading />
    }

    function toggleLike () {
        if (dislike) {
            video.dislikes -= 1
        }
        setDislike(false)
        setLike(prev => !prev)

        if (like) {
            video.likes -= 1
        } else {
            video.likes += 1
        }

    }
    function toggleDislike () {
        if (like) {
            video.likes -= 1
        }
        setLike(false)
        setDislike(prev => !prev)

        if (dislike) {
            video.dislikes -= 1
        } else {
            video.dislikes += 1
        }

    }
    function toggleFollow () {
        setFollow(prev => !prev)

        if (follow) {
            video.author.subscribersNumbers -= 1
        } else {
            video.author.subscribersNumbers += 1
        }

    }


    function showAll() {
        if (BtnDescribe && BtnDescribe.current) {
            let descr = document.querySelector('.fullscreen-info__description') as HTMLElement
            if (!toggle) {
                descr.style.overflow = 'visible'
                descr.style.height = 'auto'
                BtnDescribe.current.textContent = 'Скрыть описание'

            } else {
                descr.style.overflow = 'hidden'
                descr.style.height = '100px'
                BtnDescribe.current.textContent = 'Развернуть описание'
            }
            setToggle(prev => !prev)
        }

    }

    return (
        <>
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

                            <img className='fullscreen-info-author__image' src={video.author.avatar} />
                            <p className='fullscreen-info-author__name'>{video.author.name}</p>
                            <p className='fullscreen-info-author__follow-count'>{video.author.subscribersNumbers}</p>

                            <img className='fullscreen-info-author__follow-button' onClick={toggleFollow} src={follow ? followImgActive : followImg}/>
                            <div className='fullscreen-info-action'>
                                <div className="fullscreen-info-action__el">
                                    <p className='fullscreen-info-action__count'>{video.likes}</p>
                                    <img className='fullscreen-info-action__image' onClick={toggleLike} src={like ? likeImgActive : likeImg}/>
                                </div>

                                <div className="fullscreen-info-action__el">
                                    <p className='fullscreen-info-action__count'>{video.dislikes}</p>
                                    <img className='fullscreen-info-action__image' onClick={toggleDislike} src={dislike ? dislikeImgActive : dislikeImg} />
                                </div>

                            </div>
                        </div>
                        <p className='fullscreen-info__date'>{video.date}</p>
                        <p className='fullscreen-info__views'>{video.views} views</p>
                        <p ref={Describe} className='fullscreen-info__description'>{video.description}</p>
                        <a className='fullscreen-info__description-button' ref={BtnDescribe} onClick={showAll}>Развернуть описание</a>
                    </div>
                </div>



                {/*<div className='comments'>*/}
                {/*    <p className='comments__title'>Comments</p>*/}
                {/*    <Comment />*/}
                {/*    <Comment />*/}
                {/*    <Comment />*/}
                {/*    <Comment />*/}
                {/*</div>*/}
                <div className='similar'>
                    <p className='similar__title'>Similar</p>
                    {/*<VideosList videos={SimilarVideos} display='flex' />*/}
                </div>
            </div>
        </>
    );
};

export default VideoPage;
