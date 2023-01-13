import React from 'react';
import {PreviewVideoModel} from "../../Models";
import MyVideo from "./MyVideo";

interface MyVideosListProps {
    videos: Array<PreviewVideoModel>
}

const MyVideosList = (props: MyVideosListProps) => {
    return (
        <div>
            {props.videos.map(video => <MyVideo video={video} />)}
        </div>
    );
};

export default MyVideosList;