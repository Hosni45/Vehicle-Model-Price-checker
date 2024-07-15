import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "./compo/log&signup/SignUp.jsx";
import LogIn from './compo/log&signup/LogIn.jsx';
import  "../src/design.css"
import DataCall from "./compo/log&signup/DataCall.jsx";


function App() {

  return ( 

  <Router> 



  <Switch>

<Route path="/"> 
<LogIn   />
</Route>


  </Switch>


  </Router>
  
  





)}

export default App;
