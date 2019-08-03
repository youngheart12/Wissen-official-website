import React from 'react';
import {Row,Col} from 'reactstrap';

import './zigzag.css';
import Gets from '../../Images/getnotified.jpg'
const zigzag=()=>
{
    return(
       <div className="zigzagg">
           <Row>
               <Col md="12" className="zigheader">4 Simply Steps To Join us</Col> 
           </Row>
           <br></br><br></br>
           <Row>
               <Col md="6">
               <h2>Check Notification </h2><br></br>
               <p>Our recuirtement drive basically starts from the begining of the semester.You will receive a Notification regarding this on ums.Just keep an eye on ums in the commencement of new session</p>
               </Col>
               <Col md="6">
               <img src={Gets} alt="Notification"/>
               </Col>
               </Row>
       </div>
    );
}
export default zigzag;