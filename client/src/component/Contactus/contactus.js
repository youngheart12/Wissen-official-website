import React,{Component} from 'react';
import Header from "../Header/header";
import './contactus.css';
import {Form,Button,Input,Row,Col} from 'reactstrap';
import{contact} from '../../action/authAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import Pic from '../../Images/wissen-logo.JPG';
class Contact extends Component 
{
    state={
        name:"",
        email:"",
        phone:null,
        message:""
    }
static PropTypes ={
    contact:PropTypes.func.isRequired
}
   onChange=e=>{
       this.setState({[e.target.name]:e.target.value})
   }

   onSubmit = e => {
    e.preventDefault();

    const { name, email, phone,message } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      phone,
      message
    };

    // Attempt to register
    this.props.contact(newUser);
  };
    render(){
        return (
       <div className="contactForm">
            <Header></Header><br></br><br></br>
            <p className="yourCall"><b>It's Your Call !!!</b></p>
            <Row className="rows">
        <Col md="3">
        <Form onSubmit={this.onSubmit}>
            <Input type="text" placeholder="Your Full Name" name="name" id="samework" onChange={this.onChange}></Input> <br></br>
            <Input type="text" placeholder="Your Email Id" name="email"id="samework"onChange={this.onChange}></Input><br></br>
            <Input type="text" placeholder="Your Phone" name="phone" id="samework"onChange={this.onChange}></Input><br></br>
            <Input type="textarea" placeholder="Your Words" name="message" style={{size:"140px;"}} id="samework"onChange={this.onChange}></Input><br></br>
            <Button color="success" block>Submit</Button>
        </Form>
        </Col>
       </Row>
       
       </div>
);
    }
}
export default connect(null,{contact})(Contact);