import React from 'react';
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {fetchTutorials} from "../../redux/actions";
import {StateModel} from "../../Models";
import VideosList from "../../components/Video/VideosList";
import Loading from "../../components/Loading/Loading";

const Tutorials = () => {
    const [tutorialsVideos, loading] = useActionForFetchVideo(fetchTutorials, (state: StateModel) => state.video.tutorialVideos)
    return (
        <div className='container'>
            <p className='container__title'>Tutorials</p>
            {loading ? <Loading /> : <VideosList videos={tutorialsVideos} display='flex' /> }
        </div>
    );
};

export default Tutorials;