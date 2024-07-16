import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "./compo/log&signup/SignUp.jsx";
import LogIn from './compo/log&signup/LogIn.jsx';
import DataCall from "./compo/log&signup/DataCall.jsx";
import DashBoard from "./compo/log&signup/DashBoard.jsx";
import ProfileEdit from "./compo/log&signup/ProfileEdit.jsx";

function App() {

  return ( 

  <Router> 
  <Switch>
<Route path="/login"> 
<LogIn   />
</Route>
<Route path="/signup">
<SignUp />
</Route>
<Route path="/dash">
<DashBoard/>  
</Route>
<Route path="/profile">
  <ProfileEdit/>
</Route>
  </Switch>
  </Router>
  
)}

export default App;

