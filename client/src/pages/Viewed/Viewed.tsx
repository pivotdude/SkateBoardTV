import React, {useEffect, useState} from 'react';
import sendFetch from "../../utils/sendFetch";
import VideosList from "../../components/Video/VideosList";

const Viewed = () => {
    const [result, setResult] = useState([])

    useEffect(() => {
        sendFetch('viewed').then(res => res.json()).then(json => setResult(json))
    }, [])

    return (
        <div className='container'>
            <p className='container__title'>Viweds</p>
            <VideosList videos={result} display="flex" />
        </div>
    );
};

export default Viewed;