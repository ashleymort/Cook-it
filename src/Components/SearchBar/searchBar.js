
import React from 'react';
import reddit from '../icons/reddit.png';

import './searchbar.css';

function SearchBar() {

    return (
        <div className='searchBar'>
            <img src={reddit} alt="Reddit logo" className='RedditLogo' />
            <h1 className='headingBegin'><span className='headingEnd'>Reddit</span>Mini</h1>
            <input className='searchBox' type="text" placeholder=" search" />



        </div>
    );
}

export default SearchBar;
