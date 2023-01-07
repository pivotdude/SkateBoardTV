import React from 'react';
import VideosList from "../../components/Video/VideosList";
import author1 from "../Discover/img/author1.png";
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import {fetchDiscover, fetchPlaylist} from "../../redux/actions";
import {StateModel} from "../../Models";

const Playlist = () => {
    // const [playlists, loading] = useActionForFetchVideo(fetchPlaylist, (state: StateModel) => state.video.)

    // const videos: Array<VideoModel> = [
    //     {_id: '1das', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    //     {_id: '2as', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    //     {_id: '3s', title: 'Basic how to ride your skateboard comfortly', image: video1, UserImage: author1, UserName: 'Andy William', VideoInfo: '53K views  •  2 weeks ago', duration: 5},
    // ]
    return (
        <div className='container'>
            <p className='container__title'>Playlist</p>
            {/*<VideosList videos={videos} display='flex'  />*/}
        </div>
    );
};

export default Playlist;