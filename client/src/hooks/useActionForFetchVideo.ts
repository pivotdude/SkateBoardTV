import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {PreviewVideoModel, StateModel} from "../Models";
import {fetchPlaylistById} from "../redux/actions";
import Loading from "../components/Loading/Loading";

const useActionForFetchVideo = (stateCallback: any, actionCallback: any): any => {
    const dispatch = useDispatch()

    const data = useSelector<Array<PreviewVideoModel>>(actionCallback)
    const loading = useSelector((state: StateModel) => state.app.loading)

    useEffect(() => {
        dispatch(stateCallback())
    }, [])
    return [data, loading]
};


export default useActionForFetchVideo;