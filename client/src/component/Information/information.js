import React from 'react';
import './information.css';

const info =(props)=>
{
        return(
            <div className="icondetails">
            <br></br>
               <i className={props.iconname}></i>
            <h2>{props.data}</h2>
            <p>{props.data1}</p>
            <p>{props.data2}</p>
            </div>
        );
    
}
export default info;