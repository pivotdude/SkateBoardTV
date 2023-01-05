import React from 'react';
import {SubscribeChannelModel} from "../../Models";
import './Subscription.scss'
import {Link} from "react-router-dom";

interface SubscriptionProps {
    subscription: SubscribeChannelModel
}

const Subscription = (props: SubscriptionProps) => {
    return (
        <div className='subscription'>
            <img className='subscription__image' src={props.subscription.avatar} alt=""/>
            <Link to={`/channel/${props.subscription._id}`} className='subscription__name'>{props.subscription.name}</Link>
            <p className='subscription__subscribers-numbers'>{props.subscription.subscribersNumbers} subs.</p>
        </div>
    );
};

export default Subscription;