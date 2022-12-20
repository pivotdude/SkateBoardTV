import React from 'react';
import './NavigationMenuEl.scss'
import {Link} from "react-router-dom";

interface NavigationMenuElProps {
    title: string,
    to: string,
    image: string,
    active?: boolean
}

const NavigationMenuEl = (props: NavigationMenuElProps) => {
    return (
        <Link to={props.to} className="navigation-menu-el">
            <img alt='' className="navigation-menu-el__button" src={props.image} />
            <p className={'navigation-menu-el__title'}>{props.title}</p>
        </Link>
    );
};

export default NavigationMenuEl;