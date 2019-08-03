import React from 'react';
import {Row,Col} from 'reactstrap';

import './zigzag.css';
import Result from '../../Images/result2.jpg'
const zigzag3=()=>
{
    return(
       <div className="zigzagg">
           <Row>
           <Col md="6" className="zigcol">
               <img src={Result} alt="Registarion" className="zigimage1"/>
               </Col>
               <Col md="6">
               <h2>Wait For Result </h2><br></br>
              <p>You all done from your side.After analyzing each candidates performance our recruitment team prepare the result of the selected student.The results are declared on facebook page.</p>
               </Col>
               </Row>
       </div>
    );
}
export default zigzag3;