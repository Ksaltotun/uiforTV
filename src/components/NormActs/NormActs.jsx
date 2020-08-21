import React from 'react';
import './NormActs.css';
import { Document, Page } from "react-pdf";
import pdf from '../../pdf/new.pdf';


export const NormActs = () => {
    return(
        <div className='NormActs'>
         <a href={pdf}>Pdf</a>
        
        </div>
    );
}
