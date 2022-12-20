import React from 'react';
import follow from './img/follow.svg'
// import style from './FollowButton.module.scss'

interface followButtonProps {
    active: boolean
}

const FollowButton = (props: followButtonProps) => {
    return (
        <img src={follow} alt="" />
    );
};

export default FollowButton;