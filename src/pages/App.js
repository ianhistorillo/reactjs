// App Base

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Login }></Route>
        <Route path="/dashboard" component={ Dashboard }></Route>
      </Switch>
    </Router>
  );
}

export default App;
