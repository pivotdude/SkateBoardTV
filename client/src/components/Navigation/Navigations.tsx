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
import SubscriptionsList from "./SubscriptionsList";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {fetchSubscriptions} from "../../redux/actions";

const Navigations = () => {
    const [link, setLink] = useState('');
    const location = useLocation()

    useEffect( () => {
        setLink(location.pathname.replace('/', ''))
    }, [location])

    const dispatch = useDispatch()
    const subscriptions = useSelector((state: StateModel) => state.app.subscriptions)

    useEffect(() => {
        dispatch(fetchSubscriptions())
    }, [])

    console.log(subscriptions.subscriptions)


    return (
        <nav className='navigations'>


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
            </NavigationMenu>

            <NavigationMenu title='SUBSCRIPTIONS'>
                {/*{subscriptions && <SubscriptionsList subscriptions={subscriptions.subscriptions}  />}*/}
            </NavigationMenu>


        </nav>
    );
};

export default Navigations;