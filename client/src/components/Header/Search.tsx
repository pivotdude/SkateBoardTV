import React from 'react';
import magnifier from './img/lupa.svg'
import './Search.scss'

const Search = () => {
    return (
        <div className='search'>
            <input className='search__input' placeholder='Search...'/>
            <img className='search__button' src={magnifier} />
        </div>
    );
};

export default Search;