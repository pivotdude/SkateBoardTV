import React from 'react';
import './NavigationMenuEl.scss'
import {Link} from "react-router-dom";

interface NavigationMenuElProps {
    title: string,
    image: string,
    active?: boolean
}

const NavigationMenuEl = (props: NavigationMenuElProps) => {
    let link = props.title.toLowerCase()
    return (
        <Link to={link} className="navigation-menu-el">
            <img alt='' className="navigation-menu-el__button" src={props.image} />
            <p className={'navigation-menu-el__title'}>{props.title}</p>
        </Link>
    );
};

export default NavigationMenuEl;