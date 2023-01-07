import React from 'react';
import {SubscribeChannelModel} from "../../Models";
import './Subscription.scss'
import {Link} from "react-router-dom";

interface SubscriptionProps {
    subscription: SubscribeChannelModel
}

const Subscription = (props: SubscriptionProps) => {
    return (
        <div className='list-subscription'>
            <img className='list-subscription__image' src={props.subscription.avatar} alt=""/>
            <Link to={`/channel/${props.subscription._id}`} className='list-subscription__name'>{props.subscription.name}</Link>
        </div>
    );
};

export default Subscription;