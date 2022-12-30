import React, {useEffect, useRef, useState} from 'react';
import ProfilePhoto from './img/ProfileExmple.png'
import Notif from './img/notificationHasArrived.svg'
import './Profile.scss'
import arrow from "./img/arrow.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {fetchProfileInfo, logOutAction} from "../../redux/actions";

const Profile = () => {
    let [toggle, setToggle] = useState(false)

    const dispatch: Function  = useDispatch()
    const profile: any = useSelector((state: StateModel) => state.app.fetchProfile)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)
    const authUser: any = useSelector((state: StateModel) => state.authorization.auth)

    const profileMenu = useRef<HTMLDivElement>(null)

    function actionHandler() {
        if (!toggle && profileMenu && profileMenu.current) {
            profileMenu.current.style.display = 'block'
        } else if (toggle && profileMenu && profileMenu.current) {
            profileMenu.current.style.display = 'none'
        }
        setToggle(prev => !prev)
    }

    useEffect(() => {
        // if login
        setTimeout(() => {
            dispatch(fetchProfileInfo())
        }, 100)
    }, [authUser])

    useEffect(() => {
        dispatch(fetchProfileInfo())
    }, [])

    function logoutHandler() {
        dispatch(logOutAction())
    }
    if (!localStorage.getItem('token') || authUser.success == false || profile.message ==  'UnAuthorization') {
        return (
            <div className='unAuth'>
                <Link to='/login' className='unAuth__link unAuth__link_left'>Log in</Link>
                <Link to='/registration' className='unAuth__link'>Registration</Link>
            </div>
        )
    }


    return (
        <div>
            <div className='header-profile' onClick={actionHandler}>
                <img alt='your photo' className='header-profile__photo' src={profile.avatar} />
                <p className='header-profile__name'>{profile.name}</p>
                <img alt='' className='header-profile__arrow' src={arrow} />
                <img alt='' className='header-profile__notification' src={Notif} />
            </div>
            <div className='profile-menu' ref={profileMenu}>
                <Link to={'channel/1/'} className='profile-menu__link'>My channel</Link>
                <p className='profile-menu__link'>My videos</p>
                <p className='profile-menu__link'>Settings</p>
                <p className='profile-menu__link' onClick={logoutHandler}>Log out</p>
            </div>
        </div>


    );
};

export default Profile;