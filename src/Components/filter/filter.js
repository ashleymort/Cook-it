import React from 'react';
import fire from '../icons/fire.png';
import newLogo from '../icons/new.png';
import top from '../icons/top.png';
import rising from '../icons/rising.png';
import './filter.css';



function Filter() {
    return (
        <div className="filterButtons">
            <button className='buttons'><img src={fire} alt="hot logo" /></button>
            <button className='buttons'><img src={newLogo} alt="new logo" /></button>
            <button className='buttons'><img src={top} alt="top logo" /></button>
            <button className='buttons'><img src={rising} alt="rising logo" /></button>

        </div>
    );
}

export default Filter;
