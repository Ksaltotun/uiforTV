import React from 'react';
import './CommonInfo.css';
import BigButton from '../BigButton';
import TopLogo from '../TopLogo';

export const CommonInfo = () => {
    return (
        <div className='commonInfo'>
            <TopLogo/>
            <BigButton props='commoninfo/info_2020' />
            <BigButton props='commoninfo/info_2019' />
        </div>
    );
}