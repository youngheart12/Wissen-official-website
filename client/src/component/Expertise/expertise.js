import React from 'react';
import './expertise.css';
import {Row,Col} from 'reactstrap';
import Info from '../Information/information';
const expertise=()=>
{
    return(<div className="expertise">
        <Row>
    <Col md="12">
    <h1>Our expertise</h1>
    </Col>
    </Row>
    <Row>
        <Col md="12"><p><b>Product development done right</b></p></Col>
        </Row>
        <Row>
            <Col md="4">
            <Info iconname="fas fa-code" data="Concept & Strategy" data1="Workshop, Seminar" data2= "and Technical competition"></Info>
            </Col>
            <Col md="4">
            <Info iconname="fas fa-chart-line" data="Total Attendess" data1="More than 250+" data2="vertos have shown their skills"></Info> 
            </Col>
            <Col md="4">
            <Info iconname="fas fa-users" data="Strength" data1="100+ Organisation " data2="Members are working currently"></Info>
            </Col>
            </Row>
    </div>);
}
export default expertise;