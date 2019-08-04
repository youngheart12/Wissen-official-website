import React, { Component } from 'react';
import './App.css';
import{Route,Switch} from 'react-router-dom';
import Signup from '../src/component/authHandle/registartion'
import Mainlayout from './component/MainLayout/mainlayout';
import { Provider } from 'react-redux';
import { loadUser } from './action/authAction';
import Event from './component/Event/event'
import Store from './store';
import Contact from './component/Contactus/contactus';
import About from './component/aboutus/about';
import Login from './component/authHandle/login';
class App extends Component {
  componentDidMount()
  {
    Store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={Store}>
      <Switch>
        <Route path="/" exact component={Mainlayout}></Route>
      <Route path="/Joinus" component={Signup}></Route>
      <Route path="/events" component={Event}></Route>
      <Route path="/contactus" component={Contact}></Route>
      <Route path="/aboutus" component={About}></Route>
      <Route path="/login" component={Login}></Route>
     {/* <Route path="/Signin" component={SignIn}></Route>
     
     <Route path="/CreateEvent" component={createEvent}></Route>  */}
      </Switch>
      </Provider>
  
      );
  }
}

export default App;
