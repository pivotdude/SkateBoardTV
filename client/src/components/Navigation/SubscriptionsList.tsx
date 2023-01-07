import React from 'react';
import {SubscribeChannelModel} from "../../Models";
import Subscription from "./Subscription";

interface SubscriptionsListProps {
    subscriptions: Array<SubscribeChannelModel>
}

const SubscriptionsList = (props: SubscriptionsListProps) => {

    return (
        <div>
            {props.subscriptions.map(subscription => <Subscription key={subscription._id} subscription={subscription} />)}
        </div>
    );
};

export default SubscriptionsList;