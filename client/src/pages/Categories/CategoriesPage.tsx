import React from 'react';
import VideosList from "../../components/Video/VideosList";

interface CategoriesPageProps {
    title: string
}

const CategoriesPage = (props: CategoriesPageProps) => {
    // const videos: Array<VideoModel> = [
    //     {_id: '1das', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    //     {_id: '2as', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    //     {_id: '3s', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    // ]

    return (
        <div>
            <div className='container InTrend__container'>
                <p className='container__title'>{props.title}</p>
                {/*<VideosList videos={videos} display='flex' />*/}
            </div>
        </div>
    );
};

export default CategoriesPage;