import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import followImgActive from "./img/activateFollow.svg";
import followImg from "./img/follow.svg";
import likeImgActive from "./img/activateLike.svg";
import likeImg from "./img/like.svg";
import dislikeImgActive from "./img/activateDislike.svg";
import dislikeImg from "./img/dislike.svg";
import {showModal} from "../../redux/actions";
import sendFetch from "../../utils/sendFetch";
import {fullVideoModel} from "../../Models";
import {useDispatch} from "react-redux";
import dateToNormal from "../../utils/dateToNormal";

interface VideoInfoProps {
    video: fullVideoModel,
    loading: boolean,
    videoId: string | undefined,
}

const VideoInfo = (props: VideoInfoProps) => {
    const dispatch: Function  = useDispatch()

    const BtnDescribe = useRef<HTMLAnchorElement>(null)
    const Describe = useRef<HTMLParagraphElement>(null)

    const [toggle, setToggle] = useState(false)
    const [like, setLike] = useState<boolean>(props.video.isLiked)
    const [dislike, setDislike] = useState<boolean>(props.video.isDisliked)
    const [follow, setFollow] = useState<boolean>(props.video.isSubscriptions)

    const [dislikeCount, setDislikeCount] = useState<number>(props.video.dislikes)
    const [likeCount, setLikeCount] = useState<number>(props.video.likes)
    const [followCount, setFollowCount] = useState<number>(props.video.author.subscribersNumbers)

    function toggleLike () {
        if (!localStorage.getItem('token')) {
            return dispatch(showModal('Вы не авторизованы!'))
        }

        if (dislike) {
            setDislikeCount(prev => prev - 1)
            sendFetch(`action/undislike/${props.videoId}`)
        }
        setDislike(false)

        if (like) {
            setLikeCount(prev => prev - 1)
            sendFetch(`action/unlike/${props.videoId}`)
        } else {
            // dispatch(putLike(videoId))
            setLikeCount(prev => prev + 1)
            sendFetch(`action/like/${props.videoId}`)
        }
        setLike(prev => !prev)
    }

    function toggleDislike () {

        if (!localStorage.getItem('token')) {
            return dispatch(showModal('Вы не авторизованы!'))
        }

        if (like) {
            props.video.likes -= 1
            setLikeCount(prev => prev - 1)
            sendFetch(`action/unlike/${props.videoId}`)
        }
        setLike(false)

        if (dislike) {
            setDislikeCount(prev => prev - 1)
            sendFetch(`action/undislike/${props.videoId}`)
        } else {
            props.video.dislikes += 1
            setDislikeCount(prev => prev + 1)
            sendFetch(`action/dislike/${props.videoId}`)
        }
        setDislike(prev => !prev)

    }

    function toggleFollow () {

        if (!localStorage.getItem('token')) {
            return dispatch(showModal('Вы не авторизованы!'))
        }

        if (follow) {
            setFollowCount(prev => prev - 1)
            sendFetch(`action/unfollow/${props.videoId}`)
        } else {
            setFollowCount(prev => prev + 1)
            sendFetch(`action/follow/${props.videoId}`)
        }

        setFollow(prev => !prev)
    }

    function showAll() {
        if (BtnDescribe && BtnDescribe.current && Describe.current) {
            if (!toggle ) {
                Describe.current.style.overflow = 'visible'
                Describe.current.style.height = 'auto'
                BtnDescribe.current.textContent = 'Скрыть описание'
            } else {
                Describe.current.style.overflow = 'hidden'
                Describe.current.style.height = '100px'
                BtnDescribe.current.textContent = 'Развернуть описание'
            }
            setToggle(prev => !prev)
        }

    }


    return (
        <div className="fullscreen-info">

            <div style={{display: 'flex', alignItems: 'center'}}>
                <p className="fullscreen-info__title">{props.video.title}</p>
            </div>

            <div className='fullscreen-info-author'>

                <img className='fullscreen-info-author__image' src={props.video.author.avatar} />
                <Link to={`/channel/${props.video.author._id}`} className='fullscreen-info-author__name'>{props.video.author.name}</Link>
                <p className='fullscreen-info-author__follow-count'>{followCount}</p>

                {props.video.isAuthor ? <p>Вы автор!</p> : <img className='fullscreen-info-author__follow-button' onClick={toggleFollow} src={follow ? followImgActive : followImg}/> }
                <div className='fullscreen-info-action'>
                    <div className="fullscreen-info-action__el">
                        <p className='fullscreen-info-action__count'>{likeCount}</p>
                        <img className='fullscreen-info-action__image' onClick={toggleLike} src={like ? likeImgActive : likeImg}/>
                    </div>

                    <div className="fullscreen-info-action__el">
                        <p className='fullscreen-info-action__count'>{dislikeCount}</p>
                        <img className='fullscreen-info-action__image' onClick={toggleDislike} src={dislike ? dislikeImgActive : dislikeImg} />
                    </div>
                </div>
            </div>

            <p className='fullscreen-info__date'>{dateToNormal(props.video.date)}</p>
            <p className='fullscreen-info__date'>{props.video.date}</p>
            <p className='fullscreen-info__views'>{props.video.views} views</p>
            <p ref={Describe} className='fullscreen-info__description'>{props.video.description}</p>
            <a className='fullscreen-info__description-button' ref={BtnDescribe} onClick={showAll}>Развернуть описание</a>
        </div>
    );
};

export default VideoInfo;