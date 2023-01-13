import React from 'react';
import ChannelAuthorInfo from "./ChannelAuthorInfo";
import ChannelNavBar from "./ChannelNavBar";
import {useParams} from "react-router-dom";


const ChannelHeader = () => {
    const {channelId} = useParams<string>()
    return (
        <div style={{width: '93%', marginBottom: '60px'}}>
            <ChannelAuthorInfo channelId={channelId} />
            <ChannelNavBar />
        </div>
    );
};

export default ChannelHeader;