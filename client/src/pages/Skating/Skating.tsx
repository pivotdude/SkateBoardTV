import React from 'react';
import VideosList from "../../components/Video/VideosList";
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {StateModel} from "../../Models";
import {fetchSkating} from "../../redux/actions";
import Loading from "../../components/Loading/Loading";

const Skating = () => {
    const [skatingVideos, loading] = useActionForFetchVideo(fetchSkating, (state: StateModel) => state.video.videosList)
    return (
        <div className='container'>
            <p className='container__title'>Skating</p>
            {loading ? <Loading /> : <VideosList videos={skatingVideos} display='flex' /> }
        </div>
    );
};

export default Skating;