import React,{Component} from 'react';
//import Circle from '../../Images/W4pc.gif';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Alert
 
} from 'reactstrap';
import './login.css';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../action/authAction';
import { clearErrors } from '../../action/errorAction';
class Login extends Component{
  state = {
    email: '',
    password: '',
    msg: null
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    // if(isAuthenticated){
    //   return <Redirect to ="/"></Redirect>
    // }
  }
 
  // toggle = () => {
  //   // Clear errors
  //   this.props.clearErrors();
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const {history}=this.props;
    const user = {
      email,
      password
    };

    // Attempt to login
    this.props.login(user);
    history.push('/');

  };

  render()
  {
    return(
      <div className="mainpart">
        <Row >
          
          <Col md={{size:4 ,offset:2}} className="loginpage1">
      <img src={require('../../Images/w4.gif')} alt="gify" style={{width:"500px",borderRadius:"25px"}}></img>
          </Col>
          <Col sm="12" md={{ size: 4}} className="loginpage">
            {/* <Input type="text" placeholder="enter your username"></Input> */}
            <br></br>
            <h2 style={{textAlign:"center"}}>Login</h2>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                {/* <Label for='email'>Email</Label> */}
                <div className="divblack">
                  <Row>
                    <Col  md={{size:2,offset:1}} style={{textAlign:"center",borderRadius:"50%"}}><i class="fas fa-envelope"></i></Col>
                  <Col md="8">
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />
                </Col>
                </Row>
                </div>
                
             
                {/* <Label for='password'>Password</Label> */}
                <div className="divblack">
                  <Row >
                    <Col md={{size:2,offset:1}} style={{textAlign:"center",borderRadius:"50%"}}><i class="fas fa-key"></i></Col>
                  <Col md="8">
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                </Col>
                </Row>
                </div>
      <br></br>
      <Col md={{size:10,offset:1}} style={{textAlign:"center"}}>
      <Button color='dark' >
                  Login
                </Button>
      </Col>
                
              </FormGroup>
            </Form>
    
          </Col>
          
        </Row>
      </div>
      );
    
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);