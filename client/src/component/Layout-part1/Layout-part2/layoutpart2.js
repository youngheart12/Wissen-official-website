import React,{Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import Info from '../../Information/information';
import './layoutpart2.css';
class Layout2 extends Component
{
    render()
    {
        return(
            <Container className="layoutpart2">
                <Row>
                    <Col md="3">
                    <Info iconname="fas fa-code" data="200+" data1="Programms in" data2="55+ discipline"></Info>
                    </Col>
                    <Col md="3">
                    <Info iconname="fas fa-code" data="200+" data1="Programms in" data2="55+ discipline"></Info>
                    </Col>
                    <Col md="3">
                    <Info iconname="fas fa-code" data="200+" data1="Programms in" data2="55+ discipline"></Info>
                    </Col>
                    <Col md="3">
                    <Info iconname="fas fa-code" data="200+" data1="Programms in" data2="55+ discipline"></Info>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Layout2