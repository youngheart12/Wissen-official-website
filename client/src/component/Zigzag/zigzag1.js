import React from 'react';
import {Row,Col} from 'reactstrap';

import './zigzag.css';
import Regs from '../../Images/reg.jpg'
const zigzag1=()=>
{
    return(
       <div className="zigzagg">
           <Row>
           <Col md="6">
               <img src={Regs} alt="Registarion" className="zigimage1"/>
               </Col>
               <Col md="6">
               <h2>Fill Application Form </h2><br></br>
               <p>Now its time to get registered yourself for the interview round.You will find the registration link on the ums notification.The registration link will also be found on our facebook page and here. </p>
               </Col>
               </Row>
       </div>
    );
}
export default zigzag1;