import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import videojs from 'video.js'

const Player = () => {

    return (

        <video
            id="myplayer"
            className="video-js"
            controls
            preload="auto"
            poster="MY_VIDEO_POSTER.jpg"
            data-setup="{}"
        >
            <source src="/videos/katana/dash.mpd" type="application/dash+xml"/> // application/dash+xml application/x-mpegURL

            <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
        </video>








    );
};

export default Player;