import React, {useEffect} from 'react';
import './Studio.scss'
import MyVideosList from "./MyVideosList";
import {useDispatch, useSelector} from "react-redux";
import {fetchStudioVideos} from "../../redux/actions";
import {StateModel} from "../../Models";

const Studio = () => {

    const dispatch = useDispatch()
    const videos = useSelector((state: StateModel) => state.video.studioVideos)

    useEffect(() => {
        dispatch(fetchStudioVideos())
    }, [])

    console.log(videos)
    
    return (
        <div className='container'>
            <p className='container__title'>Your studio</p>
            {/*<MyVideosList videos={} />*/}
        </div>
    );
};

export default Studio;