import React from 'react';
import ProfilePhoto from './img/ProfileExmple.png'
import Notif from './img/notificationHasArrived.svg'
import './Profile.scss'
import arrow from "./img/arrow.svg";

const Profile = () => {
    return (
        <div className='header-profile'>
            <img alt='your photo' className='header-profile__photo' src={ProfilePhoto} />
            <p className='header-profile__name'>Thomas</p>
            <img alt='' className='header-profile__arrow' src={arrow} />
            <img alt='' className='header-profile__notification' src={Notif} />
        </div>
    );
};

export default Profile;