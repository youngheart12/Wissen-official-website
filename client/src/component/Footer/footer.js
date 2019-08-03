import React from 'react';
import './footer.css';
import { Jumbotron, Button,Row,Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Jumbotron className="footerstyle">
      <Row>
        <Col md="7">
       <span className="spanheader">Don't be shy - Drop us a line.</span>
       <h5>We are looking forward to speaking with you.</h5>
       <h3 style={{color:"black",textDecoration:"underline"}}>clubwissenedu@gmail.com</h3>
        <Button color="dark" outline>Submit</Button>
        <br></br> <br></br> 
       <h7>&copy; Copyright 2019-2050. All rights reserved to team WISSEN </h7>
        </Col>
        <Col md="5">
        <Row><Col md="3">
        <h4 style={{color:"black",textDecoration:"underline"}}> About</h4>
        <i class="fab fa-facebook-f" ></i> <span className="pi"> facebook</span> <br></br>
        <i class="fab fa-linkedin-in"></i> <span  className="pi"> linkedin</span><br></br>
        <i class="fab fa-instagram"></i> <span  className="pi"> instagram</span><br></br>
        <i class="fab fa-twitter"></i> <span  className="pi"> twitter</span><br></br>
        <i class="fas fa-envelope"></i> <span  className="pi"> gmail</span>
        </Col>
        <Col md="4">
        <h4 style={{color:"black",textDecoration:"underline"}}> Our Services</h4>
         <p className="pii">Website Development</p>
         <p className="pii">Android Development</p>
         <p className="pii">Website Designing</p>
         <p className="pii">Industrial Training</p>
         <p className="pii">Inter-Campus Competition</p>
        </Col>
        <Col md="4">
        <h4 style={{color:"black",textDecoration:"underline"}}> Contact</h4>
         <p className="pii">Address: Jalandhar-Delhi G.T. Road (NH-1)</p>
         <p className="pii">Phagwara, Punjab, 144411, India</p>
         <p className="pii">Contact No.: +918787292169, +918340683104</p>
        </Col>
        </Row>
        </Col>
        </Row>
        
      </Jumbotron>
    </div>
  );
};

export default Footer;