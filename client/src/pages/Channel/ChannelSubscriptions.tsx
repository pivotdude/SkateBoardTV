import React, {useEffect} from 'react';
import ChannelHeader from "./ChannelHeader";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {StateModel} from "../../Models";
import {fetchChannelAbout, fetchChannelSubscribe} from "../../redux/actions";
import SubscriptionList from "../../components/Subscriber/SubscriptionList";

const ChannelSubscriptions = () => {
    const dispatch = useDispatch()
    const {channelId} = useParams<string>()

    const channelSubscriptions = useSelector((state: StateModel) => state.channel.channelSubscriptions)


    useEffect(() => {
        dispatch(fetchChannelSubscribe(channelId))
    }, [])

    if (channelSubscriptions.subscriptions?.length == 0) {
        channelSubscriptions.subscriptions = null
    }


    return (
        <div className='container'>
            <ChannelHeader />
            <div>
                {channelSubscriptions.subscriptions ? <SubscriptionList subscriptions={channelSubscriptions.subscriptions} /> : <p className='not-found'>Подписок нет</p>}
            </div>
        </div>
    );
};

export default ChannelSubscriptions;