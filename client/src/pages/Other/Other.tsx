import React from 'react';
import VideosList from "../../components/Video/VideosList";
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {fetchOther} from "../../redux/actions";
import {StateModel} from "../../Models";

const Other = () => {
    const [otherVideos, loading] = useActionForFetchVideo(fetchOther, (state: StateModel) => state.video.videosList)
    return (
        <div className='container'>
            <p className='container__title'>Other</p>
            <VideosList videos={otherVideos} display='flex' />
        </div>
    );
};

export default Other;