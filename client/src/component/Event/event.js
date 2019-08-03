import React,{Component} from 'react';
//import SingleEvent from './singleEvent';
import {Row,Col} from 'reactstrap';
import Footer from '../Footer/footer';
import Countdown from 'react-countdown-now';
import './event.css';
import HeaderLogin from '../Header/Headerlogin/headerlogin';
import Header from '../Header/header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
class Event extends Component{
    static propTypes = {
        auth: PropTypes.object.isRequired
      };
    state={
        eventDetails:[],
        loading:false
    }
    
    componentDidMount()
    {
        axios.get('/api/events').then((res)=>{
            this.setState({eventDetails:res.data,
            loading:true})
         })
    }
    render(){
        const { isAuthenticated } = this.props.auth;
    //     var eventList=null;
    //     if(this.state.eventDetails)
    //     {
    //     eventList=this.state.eventDetails.map((event)=>{
    //         return<SingleEvent 
    //         name={event.name}
    //         detials={event.detials}
    //         tag={event.tag}
    //         startDate={event.startDate}
    //         endDate={event.endDate}></SingleEvent>
    //     })
    // }
    const Completionist = () =>   <span style={{fontsize:"18px",color:"#6a1b9a"}}>Event started !</span>
    const renderer = ({ hours, minutes, seconds, completed,days }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
        //   return <span><div className="time">{days}</div>:<div className="time">{hours}</div>:{minutes}:{seconds}</span>;
    return(<div className="mainTimer">
        <div class="dayTimer" id="sameTimer">{days}<br></br>Days</div>
        <div class="hourTimer" id="sameTimer">{hours}<br></br>Hours</div>
        <div class="minuteTimer" id="sameTimer">{minutes}<br></br>Minutes</div>
        <div class="secondTimer" id="sameTimer">{seconds}<br></br>Seconds</div>
    </div>) ;   
    }
      };
        return (
            <div>
                {isAuthenticated?<HeaderLogin></HeaderLogin>:<Header></Header>}<br></br><br></br><br></br>
        <div className="banner">
          <p style={{color:"#6200EE",alignSelf:"left"}}>5 Days 10 session</p>
          <h1>Pixels Pioneers Belfast Hackathon</h1>
            <Countdown
    date={Date.now() + 50000000}
    renderer={renderer}
  />
  <Row>
   <Col md="3" className="typeposs">
    <h1>It's seems</h1><h1> Impossible</h1> <h1>Until it's </h1> <h1>Done !!! </h1>
                        </Col>
                    </Row>
        </div>
        <br></br>
       <Footer></Footer>
        </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
  });
export default connect(mapStateToProps,null)(Event);