import React from 'react';
import {StateModel, SubscribeChannelModel} from "../../Models";
import Subscription from "./Subscription";
import './Subscription.scss'
import {useSelector} from "react-redux";

interface SubscriberListProps {
    subscriptions: Array<SubscribeChannelModel>
}

const SubscriptionList = (props: SubscriberListProps) => {

    const loading = useSelector((state: StateModel) => state.app.loading)

    if (loading) {
        return null
    }

    return (
        <div className='subscriptions-list'>
            {props.subscriptions.map(subscription => <Subscription subscription={subscription} key={subscription._id} />)}
        </div>
    );
};

export default SubscriptionList;