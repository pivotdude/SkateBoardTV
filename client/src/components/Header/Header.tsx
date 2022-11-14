import React from 'react';
import Search from "./Search";
import Profile from "./Profile";
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <p className='header__title'>skateboardTV</p>
            <Search />
            <Profile />
        </header>
    );
};

export default Header;