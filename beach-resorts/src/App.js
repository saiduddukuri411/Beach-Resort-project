import React,{Component} from 'react';
import "./App.css"
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Singleroom from './pages/Singleroom'
import Error from './pages/Errorpage'
import {Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar'


class App extends Component {
  render(){
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={Singleroom} />
      <Route component={Error}></Route>
    </Switch>
      
    </>
  );
  }
}

export default App;
