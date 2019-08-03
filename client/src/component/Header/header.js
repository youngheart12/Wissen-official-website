import React,{Component} from 'react';
//import {connect } from 'react-redux';
import './header.css';
import Login from '../authHandle/login';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

 class Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
        <Navbar light expand="md" fixed="top" style={{backgroundColor:"white"}}> 
          <NavbarBrand href="/"><i class="fas fa-jedi"></i> WISSEN</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem className="coollink">
                <NavLink  href="/components/"><i className="fas fa-briefcase"></i> Services</NavLink>
              </NavItem> */}
              <NavItem className="coollink">
                <NavLink  href="/aboutus"><i className="fas fa-info-circle"></i> About us</NavLink>
              </NavItem>
              <NavItem className="coollink">
                <NavLink  href="/contactus"><i className="fas fa-phone"></i> Contact us</NavLink>
              </NavItem>
              <NavItem className="coollink" >
                <NavLink  href="/events"><i className="fas fa-calendar-alt"></i> Events</NavLink>
              </NavItem>
              <NavItem className="coollink">
                <NavLink  href="/Joinus"><i className="fas fa-user-shield"></i> Join Us</NavLink>
              </NavItem>
              <NavItem className="coollink">
                {/* <NavLink  href="/Login"><i className="fas fa-lock-open"></i> Login</NavLink> */}
              <Login/>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      
    );
    }
 }
  export default  Example;
