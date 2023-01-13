import React from 'react';
import VideosList from "../../components/Video/VideosList";
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {StateModel} from "../../Models";
import {fetchSkating} from "../../redux/actions";
import Loading from "../../components/Loading/Loading";

const Skating = () => {
    const [skatingVideos, loading] = useActionForFetchVideo(fetchSkating, (state: StateModel) => state.video.skatingVideos)
    return (
        <div className='container'>
            <p className='container__title'>Skating</p>
            {skatingVideos ? <VideosList videos={skatingVideos} display='flex' /> : <Loading /> }
        </div>
    );
};

export default Skating;