import React from 'react';
import Banner from "./Banner";
import './Banners.scss'
import {BannerModel} from "../../Models";

interface BannerProps {
    banners: Array<BannerModel>
}

const Banners = (props: BannerProps) => {
    return (
        <div className='banners'>
            {props.banners.map(banner => <Banner banner={banner} key={banner._id} />)}
        </div>
    );
};

export default Banners;