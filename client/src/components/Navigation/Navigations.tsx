import React from 'react';
import NavigationMenu from "./NavigationMenu";

import './Navigations.scss'

import Subscriptions from "./Subscriptions";
import NavigationLinks from "./NavigationLinks";

const Navigations = () => {
    return (
        <nav className='navigations'>
            <NavigationLinks />

            <NavigationMenu title='SUBSCRIPTIONS'>
                <Subscriptions />
            </NavigationMenu>


        </nav>
    );
};

export default Navigations;