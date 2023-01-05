import React from 'react';
import ChannelAuthorInfo from "./ChannelAuthorInfo";
import ChannelNavBar from "./ChannelNavBar";
const ChannelHeader = () => {

    return (
        <div style={{width: '93%', marginBottom: '60px'}}>
            <ChannelAuthorInfo />
            <ChannelNavBar />
        </div>
    );
};

export default ChannelHeader;