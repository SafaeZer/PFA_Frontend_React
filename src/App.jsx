import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch,  Route, Redirect} from 'react-router-dom';
import { Login, Register } from "./components/login/index";
import Home from "./Pages/Home/home";
import Classwork from "./Pages/classwork";
import People from './Pages/People';
import Sidebar from "./Pages/sidebar";
import PropTypes from 'prop-types';


function App() {
 
  return(
    <Router>
 <div className="App">
   <Sidebar />
   
      
    <Switch>
        <Route  path={"/"}  component={Home} exact={true} />
        <Route  path={"/classwork"}  component={Classwork} />
       <Route path={"/people"}  component={People} />
    </Switch>
    </div>
    </Router>
    
              
   
 )


}

{/*class App extends React.Component {

    state = {
      isLogginActive: true
    };
  

  changeState(){
    const { isLogginActive } = this.state;
    if(isLogginActive){
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else{
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({isLogginActive: !prevState.isLogginActive}))
  }


  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={ref => (this.rightSide = ref)} onClick={this.changeState.bind(this)}
          />
        </div>
        
      </div>
    );
  }
  
}

   const RightSide = props => {
    return (
      <div
        className="right-side"
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };

*/}
 

export default App;
