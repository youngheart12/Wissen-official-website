import React,{Component} from 'react';
import Header from './/header';
import HeaderLogin from './/Headerlogin/headerlogin';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class Complete extends Component{
    static propTypes = {
        auth: PropTypes.object.isRequired
      };
    
    render()
    {
        const { isAuthenticated } = this.props.auth;
        return (<div>
            {isAuthenticated?<HeaderLogin></HeaderLogin>:<Header></Header>}
        </div>);
    }
}
const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStateToProps,null)(Complete);