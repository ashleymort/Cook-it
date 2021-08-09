import React from 'react';
import fire from '../icons/fire.png';
import newLogo from '../icons/new.png';
import top from '../icons/top.png';
import rising from '../icons/rising.png';
import './filter.css';



function Filter() {
    return (
        <div className="filterButtons">
            <button className='buttons'><img src={fire} alt="hot logo" />Hot</button>
            <button className='buttons'><img src={newLogo} alt="new logo" />What's New</button>
            <button className='buttons'><img src={top} alt="top logo" />Top</button>
            <button className='buttons'><img src={rising} alt="rising logo" />Rising</button>

        </div>
    );
}

export default Filter;
