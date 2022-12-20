import React from 'react';
import NoAvatar from './../VideoPage/img/NoAvatar.svg'
import follow from './../VideoPage/img/follow.svg'
import './ChannelAuthorInfo.scss'

const ChannelAuthorInfo = () => {
    return (
        <div className='channel-info'>

            <div className='channel-info-author'>
                <img className='channel-info-author__author-image' src={NoAvatar} alt=""/>
                <p className='channel-info-author__author-name'>John</p>
                <img className='channel-info-author__follow' src={follow} alt=""/>
            </div>

            <p className='channel-info__follows'>50 follows</p>
        </div>
    );
};

export default ChannelAuthorInfo;