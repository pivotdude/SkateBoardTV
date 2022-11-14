import React from 'react';
import './NavigationMenu.scss'

interface NavigationMenuProps {
    title: string,
    children?: React.ReactNode
}

const NavigationMenu = (props: NavigationMenuProps) => {
    return (
        <div className='navigation-menu'>
            <p className='navigation-menu__title'>{props.title}</p>
            {props.children}
            <hr className='navigation-menu__hr' />
        </div>
    );
};

export default NavigationMenu;