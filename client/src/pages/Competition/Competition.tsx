import React from 'react';
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {fetchCompetition} from "../../redux/actions";
import {StateModel} from "../../Models";
import VideosList from "../../components/Video/VideosList";
import Loading from "../../components/Loading/Loading";

const Competition = () => {
    const [competitionVideos, loading] = useActionForFetchVideo(fetchCompetition, (state: StateModel) => state.video.competitionVideos)
    return (
        <div>
            <div className='container'>
                <p className='container__title'>Competition</p>
                {loading ? <Loading /> : <VideosList videos={competitionVideos} display='flex' /> }
            </div>
        </div>
    );
};

export default Competition;