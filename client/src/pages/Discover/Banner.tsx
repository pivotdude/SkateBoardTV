import React from 'react';
import './Banner.scss'
import {BannerModel} from "../../Models";

interface BannerProps {
    banner: BannerModel
}

const Banner = (props: BannerProps) => {
    const bannerStyle = 'banner banner_' + props.banner.size
    const bannerInfoStyle = 'banner-info banner-info_' + props.banner.size

    return (
        <div className={bannerStyle}>
            <img src={props.banner.bannerImage} className='banner__image' />
            <p className='banner__title'>{props.banner.title}</p>

            <div className={bannerInfoStyle}>
                <img className='banner-info__photo' src={props.banner.UserImage} />

                <div className='banner-info-author'>
                    <p className='banner-info-author__name'>{props.banner.UserName}</p>
                    <p className='banner-info-author__video'>{props.banner.VideoInfo}</p>
                </div>
            </div>
        <p className='banner__duration'>{props.banner.duration} min</p>
        </div>
    );
};

export default Banner;