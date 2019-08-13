import React from 'react';
import '../header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
  import { logout } from '../../../action/authAction';
  import { connect } from 'react-redux';
  import PropTypes from 'prop-types';


class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  static propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  checkHandle =()=>
  {
    console.log("hitted")
  }
  render() {
    const { user } = this.props.auth;
    var first=user.name
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
    
              {/* <NavItem className="coollink1">
               <NavLink onClick={this.props.logout} href='#'><section style={{boxSizing:"border-box"}}><span class="i-circle">{first}</span> Log Out</section></NavLink>
              </NavItem> */}
              <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret id="dropstable">
          {first}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="#"  onClick={this.props.logout} >Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
             
            </Nav>
          </Collapse>
        </Navbar>
      
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps,{logout})(Example);