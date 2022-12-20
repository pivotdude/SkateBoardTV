import React, {useState} from 'react';
import ProfilePhoto from './img/ProfileExmple.png'
import Notif from './img/notificationHasArrived.svg'
import './Profile.scss'
import arrow from "./img/arrow.svg";
import {Link} from "react-router-dom";

const Profile = () => {
    let [toggle, setToggle] = useState(false)
    function actionHandler() {
        let menu = document.querySelector('.profile-menu') as HTMLElement
        if (!toggle) {
            menu.style.display = 'block'
        } else {
            menu.style.display = 'none'
        }
        setToggle(prev => !prev)
    }

    return (
        <div>
            <div className='header-profile' onClick={actionHandler}>
                <img alt='your photo' className='header-profile__photo' src={ProfilePhoto} />
                <p className='header-profile__name'>Thomas</p>
                <img alt='' className='header-profile__arrow' src={arrow} />
                <img alt='' className='header-profile__notification' src={Notif} />
            </div>
            <div className='profile-menu'>
                <Link to={'channel/1'} className='profile-menu__link'>My channel</Link>
                <p className='profile-menu__link'>My videos</p>
                <p className='profile-menu__link'>Settings</p>
                <p className='profile-menu__link'>Log out</p>
            </div>
        </div>


    );
};

export default Profile;