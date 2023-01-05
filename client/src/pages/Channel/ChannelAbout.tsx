import React, {useEffect} from 'react';
import ChannelHeader from "./ChannelHeader";
import './ChannelAbout.scss'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchChannelAbout} from "../../redux/actions";
import {StateModel} from "../../Models";
import useGetDateAtUser from "../../hooks/useGetDateAtUser";

const ChannelAbout = () => {
    const dispatch = useDispatch()
    const {channelId} = useParams<string>()

    const channelAbout = useSelector((state: StateModel) => state.channel.channelAbout)

    useEffect(() => {
        dispatch(fetchChannelAbout(channelId))
    }, [])



    // const channelAbout = useGetDateAtUser((state: StateModel) => state.channel.channelAbout, fetchChannelAbout)
    // console.log(channelAbout)

    return (
        <div className='container'>
            <ChannelHeader />
            <div className='about-channel'>

                <p className='about-channel__content'>{channelAbout.description ? channelAbout.description : 'Описание отсутсвует'}</p>

                <p className='about-channel__content'>Дата регистрации: {new Date(channelAbout.regDate).toLocaleString()}</p>



            </div>
        </div>
    );
};

export default ChannelAbout;