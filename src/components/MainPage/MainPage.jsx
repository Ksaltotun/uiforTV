import React from 'react';
import './MainPage.css';
import BigButton from '../BigButton';
import TopLogo from '../TopLogo';

export const MainPage = () => {
    
    return (
        <div className='MainPage boxForTv'>
            <TopLogo/>
            <BigButton props='commoninfo' />
            <BigButton props='normacts' />
            <BigButton props='orders' />
        </div>
    );
}

