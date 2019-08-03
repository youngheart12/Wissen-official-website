import React from 'react';
import {Row,Col} from 'reactstrap';

import './zigzag.css';
import Ints from '../../Images/inter.jpg'
const zigzag2=()=>
{
    return(
       <div className="zigzagg">
           <Row>
               <Col md="6">
               <h2>Get Interviewd </h2><br></br>
               <p>After filling the application form.You will get an mail that will conatin the time and venue where interview will by taken by our Recruitment team.You will be judge on various factors. </p>
               </Col>
               <Col md="6">
               <img src={Ints} alt="Interview"/>
               </Col>
               </Row>
       </div>
    );
}
export default zigzag2;