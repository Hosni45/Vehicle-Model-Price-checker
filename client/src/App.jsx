import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "./compo/log&signup/SignUp";
import LogIn from './compo/log&signup/LogIn';
import DashBoard from "./compo/log&signup/DashBoard";
import ProfileEdit from "./compo/log&signup/ProfileEdit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/dash">
          <DashBoard />
        </Route>
        <Route path="/profile">
          <ProfileEdit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
