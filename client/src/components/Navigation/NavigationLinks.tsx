import React, {useEffect, useState} from 'react';
import NavigationMenu from "./NavigationMenu";
import NavigationMenuEl from "./NavigationMenuEl";
import discoverActive from "./img/DiscoverActive.svg";
import discover from "./img/Discover.svg";
import trendingActive from "./img/TrendingActive.svg";
import trending from "./img/Treading.svg";
import playlistActive from "./img/PlaylistActive.svg";
import playlist from "./img/Playlist.svg";
import competitionActive from "./img/CompetitionActive.svg";
import competition from "./img/Competition.svg";
import {useLocation} from "react-router-dom";

const NavigationLinks = () => {

    const [link, setLink] = useState('');
    const location = useLocation()

    useEffect( () => {
        setLink(location.pathname.replace('/', ''))
    }, [location])

    return (
        <>
            <NavigationMenu title='MENU'>
                <NavigationMenuEl title='Discover' to='/' image={link === '' ? discoverActive : discover} />
                <NavigationMenuEl title='Trending' to='trending' image={link === 'trending' ? trendingActive : trending} />
                <NavigationMenuEl title='Playlist' to='playlist' image={link === 'playlist' ? playlistActive : playlist} />
            </NavigationMenu>

            <NavigationMenu title='TAGS CATEGORY'>
                <NavigationMenuEl title='Tutorials' to='tutorials' image={link === 'tutorials' ? trendingActive : trending} />
                <NavigationMenuEl title='Competition' to='competition' image={link === 'competition' ? competitionActive : competition} />
                <NavigationMenuEl title='Review' to='review' image={link === 'review' ? competitionActive : competition} />
                <NavigationMenuEl title='Skating' to='skating' image={link === 'skating' ? competitionActive : competition} />
                {localStorage.getItem('token') && <NavigationMenuEl title='Viewed' to='viewed' image={link === 'viewed' ? competitionActive : competition} />}
            </NavigationMenu>
    </>
    );
};

export default NavigationLinks;