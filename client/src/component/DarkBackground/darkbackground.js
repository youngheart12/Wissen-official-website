import React from 'react';
import './darkbackground.css';
import {Row,Col,Button} from 'reactstrap';
const darkbackground=()=>
{
    return(
        <div className="darkbackground">
        <Row>
    <Col md="4" className="iconcenter">
<i class="fas fa-jedi"></i>
    </Col>
   <Col md="8">  
    <h1 className="darktestmain">Leading S2S Services Provider in <small>LPU, </small>Jalandhar</h1>
    <h3 className="darktext">According to Our Happy Customers</h3><br></br>
        <Button size="sm" className="darkbackgroundbutton">Get a Check</Button>
    </Col>   
    </Row>
        </div>
    );
}
export default darkbackground;