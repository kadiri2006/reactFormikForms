import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Navigation from "./Navigation";
import Registration from "./Registration";
import Login from "./Login"
import Enroll from "./Enroll";




export default function AppRouter() {
const labelNames={
  email:"emails",
  password:"password",
  confirmPassword:"confirmPassword"
}

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/registration">
            <Registration labelName={labelNames
            }/>
            </Route>
          <Route path="/login" component={Login}/>
          <Route path="/enroll" component={Enroll}/>
        </Switch>
      </Router>
    </div>
  );
}
