import React,{Component} from 'react';
import './reg.css';
import {Row,Col,Button,Alert,NavLink} from 'reactstrap';
import Capture from '../../Images/capture.jpg'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../action/authAction';
import { clearErrors } from '../../action/errorAction';
class Registration extends Component{
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
      };

      static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
      };
      componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
          // Check for register error
          if (error.id === 'REGISTER_FAIL') {
            this.setState({ msg: error.msg.msg });
          } else {
            this.setState({ msg: null });
          }
        }
    
        // If authenticated, close modal
        if (this.state.modal) {
          if (isAuthenticated) {
            this.toggle();
          }
        }
      }
    
      
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const { name, email, password } = this.state;
    
        // Create user object
        const newUser = {
          name,
          email,
          password
        };
    
        // Attempt to register
        this.props.register(newUser);
        this.props.history.push("/login");
      };
    
    render()
    {
     
        return(
            <div className="regContainer">
                <div className="regInsideContainer">
                    <h2 className="regHeader">Signup</h2><br></br>
                    <p> {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}</p>
                    <Row>
                        <Col md="6">
                            <form onSubmit={this.onSubmit}>
                            <div class="inner-addon left-addon">
    <i class="fas fa-user"></i>
    <input type="text" id="name" name="name" placeholder="Your name"onChange={this.onChange}></input>
</div><br></br>
<div class="inner-addon left-addon">
    <i class="fas fa-envelope"></i>
    <input type="text" id="email" name="email" placeholder="Your email"onChange={this.onChange}></input><br></br>
</div><br></br>
<div class="inner-addon left-addon">
    <i class="fas fa-lock"></i>
    <input type="password" id="password" name="password" placeholder="Password" onChange={this.onChange}></input>
</div>
<br>
</br>
<Button color="primary" style={{paddingTop:"5px",paddingLeft:"10px",paddingRight:"10px"}} size="lg">Register</Button>
                            </form>
                        </Col>
                        <Col md="6" className="imagePosition">
                           <img src={Capture} className="imageInside" alt="imagesignup"></img>   
                        </Col>
                    </Row>
                    {this.props.isAuthenticated?  <NavLink href="/">
     <Button color="success">Login</Button>
 </NavLink>:null}
                </div>
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
    { register, clearErrors }
  )(Registration);