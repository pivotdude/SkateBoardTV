import React, {useEffect} from 'react';
import SubscriptionsList from "./SubscriptionsList";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {fetchSubscriptions} from "../../redux/actions";

const Subscriptions = () => {

    const dispatch = useDispatch()
    const subscriptions = useSelector((state: StateModel) => state.app.subscriptions)
    const VideoInfo = useSelector((state: StateModel) => state.video.videoById)
    const athInfo = useSelector((state: StateModel) => state.channel.authorInfo)

    useEffect(() => {
        dispatch(fetchSubscriptions())
    }, [])

    useEffect(() => {
        dispatch(fetchSubscriptions())
    }, [VideoInfo, athInfo])

    return (
        <>
            {subscriptions.subscriptions && <SubscriptionsList subscriptions={subscriptions.subscriptions}  />}
        </>
    )
};

export default Subscriptions;