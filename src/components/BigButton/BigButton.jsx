import React from 'react';
import './BigButton.css'; 

let label = '';

export const BigButton = ({props}) => {
    
    switch(props){
        case 'commoninfo':
            label = 'Единое информирование'; 
        break;
        case 'normacts':
            label = 'Нормативные документы';
        break;
        case 'orders':
            label = 'Приказы';
        break;
        case 'commoninfo/info_2020':
            label = '2020';
        break;
        case 'commoninfo/info_2019':
            label = '2019';
        break;
        
        default:
            break;

    }

    return(
        <div className='BigButton' onClick={()=>{console.log(props)}}>
           <div className='ButtonName'><a href={'/' + props} className='buttonLabel'>{label}</a></div>
        </div>
    );
}

