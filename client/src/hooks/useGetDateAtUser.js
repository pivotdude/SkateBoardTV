import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {fetchChannelVideos} from "../redux/actions";

const useGetDateAtUser = (callback, callback2) => {
    const dispatch = useDispatch()
    const {channelId} = useParams()
    // (state: StateModel) => state.channel.channelVideos
    const fetchedValues = useSelector(callback)

    useEffect(() => {
        dispatch(callback2(channelId))
    }, [])

    return fetchedValues
};

export default useGetDateAtUser;