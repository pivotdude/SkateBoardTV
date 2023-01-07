import React, {useEffect, useState} from 'react';
import './Discover.scss'
import Banners from "./Banners";
import VideosList from "../../components/Video/VideosList";
import video1 from './img/video1.png'
import author1 from './img/author1.png'
import {BannerModel, PreviewVideoModel, StateModel} from "../../Models";
import photo from "./img/Group 384.png";
import UserPhoto from "./img/Group 368.png";
import small from './img/small.png'
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {fetchDiscover} from "../../redux/actions";
import Loading from "../../components/Loading/Loading";

const Discover = () => {
    const [discoverVideos, loading] = useActionForFetchVideo(fetchDiscover, (state: StateModel) => state.video.discoverVideos)
    console.log(discoverVideos)

    const bannersArray: Array<BannerModel> = [
        {_id: '12asjdjsa', size: "large", bannerImage: photo, title: 'How to do Basic Jumping and how to landing safely', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 7},
        {_id: 'askdk2kaksd2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 10},
        {_id: 'asd;a;sd;s;a2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 2},
        {_id: 'asd;a;sфыd;s;a2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 2},
        {_id: 'asd;a;sd;sыяч;a2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 2},
        {_id: 'asd;a;ячsd;s;a2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 2},
        {_id: 'asd;a;смsd;s;a2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 2},
        {_id: 'asd;a;sd;ыs;a2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 2},
        {_id: 'asd;a;sыфывd;s;a2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 2},
        {_id: 'asd;a;sdфыв;s;a2', size: "small", bannerImage: small, title: 'Skateboard Tips You need to know', UserImage: UserPhoto, UserName: 'Thomas Hope', VideoInfo: '53K views  •  2 weeks ago', duration: 2},
    ]

    // if (loading) {
    //     return (
    //         <div className='container container_discover'>
    //             <Loading />
    //     </div>
    //          )
    // }

    return (
        <div className='container container_discover'>
            <p className='container__title'>Discover</p>
            <Banners banners={bannersArray} />

            {loading ? <Loading /> : <VideosList videos={discoverVideos} display='flex' />}
        </div>
    );
};

export default Discover;