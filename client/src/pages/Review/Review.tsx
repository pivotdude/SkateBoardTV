import React from 'react';
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {fetchReview, fetchTutorials} from "../../redux/actions";
import {StateModel} from "../../Models";
import VideosList from "../../components/Video/VideosList";
import Loading from "../../components/Loading/Loading";

const Review = () => {
    const [reviewVideos, loading] = useActionForFetchVideo(fetchReview, (state: StateModel) => state.video.reviewVideos)
    return (
        <div className='container'>
            <p className='container__title'>Review</p>
            {loading ? <Loading /> :<VideosList videos={reviewVideos} display='flex' /> }
        </div>
    );
};

export default Review;