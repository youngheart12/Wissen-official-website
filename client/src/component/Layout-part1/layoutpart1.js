import React,{Component} from 'react';
import Header from '../Header/header';
import HeaderLogin from '../Header/Headerlogin/headerlogin';
import {Row,Col,Container} from 'reactstrap';
import {connect} from 'react-redux';
import './layoutpart1.css';
import PropTypes from 'prop-types';
class Layoutpart1 extends Component
{
    static propTypes = {
        auth: PropTypes.object.isRequired
      };
    
    render()
    {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="layoutpart1">
            {isAuthenticated?<HeaderLogin></HeaderLogin>:<Header></Header>}
                <Container>
                    <Row>
                        <Col md="4" className="typepos">
                        <h1>Better</h1><h1> Education</h1> <h1>Develops the </h1> <h1>Nation !!! </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default  connect(mapStateToProps,null)(Layoutpart1);
