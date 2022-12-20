import React from 'react';
import cup from "./img/cup.png";
import ChannelAuthorInfo from "./ChannelAuthorInfo";
import ChannelNavBar from "./ChannelNavBar";
import './ChannelHeader.scss'
const ChannelHeader = () => {
    return (
        <div className="channel-header">
            <img src={cup} alt="" className='channel-header__cup' />
            <ChannelAuthorInfo />
            <ChannelNavBar />
        </div>
    );
};

export default ChannelHeader;