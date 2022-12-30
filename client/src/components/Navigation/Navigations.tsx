import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import NavigationMenuEl from "./NavigationMenuEl";
import NavigationMenu from "./NavigationMenu";

import './Navigations.scss'

import discover from './img/Discover.svg'
import trending from './img/Treading.svg'
import playlist from './img/Playlist.svg'
import competition from './img/Competition.svg'

import discoverActive from './img/DiscoverActive.svg'
import trendingActive from './img/TrendingActive.svg'
import playlistActive from './img/PlaylistActive.svg'
import competitionActive from './img/CompetitionActive.svg'

const Navigations = () => {
    const [link, setLink] = useState('');
    const location = useLocation()

    useEffect( () => {
        setLink(location.pathname.replace('/', ''))
    }, [location])

    return (
        <nav className='navigations'>


            <NavigationMenu title='MENU'>
                <NavigationMenuEl title='Discover' to='/' image={link === '' ? discoverActive : discover} />
                <NavigationMenuEl title='Trending' to='trending' image={link === 'trending' ? trendingActive : trending} />
                <NavigationMenuEl title='Playlist' to='playlist' image={link === 'playlist' ? playlistActive : playlist} />
            </NavigationMenu>

            <NavigationMenu title='CATEGORY'>
                <NavigationMenuEl title='Tutorials' to='tutorials' image={link === 'tutorials' ? trendingActive : trending} />
                <NavigationMenuEl title='Competition' to='competition' image={link === 'competition' ? competitionActive : competition} />
                <NavigationMenuEl title='Review' to='review' image={link === 'review' ? competitionActive : competition} />
                <NavigationMenuEl title='Skating' to='skating' image={link === 'skating' ? competitionActive : competition} />
                <NavigationMenuEl title='Other' to='other' image={link === 'other' ? competitionActive : competition} />
            </NavigationMenu>

            <NavigationMenu title='SUBSCRIBERS'>

            </NavigationMenu>


        </nav>
    );
};

export default Navigations;