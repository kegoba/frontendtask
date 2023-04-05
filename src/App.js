import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/menu/navbar";
import Home from "./components/pages/home";
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/contact"  />
        <Route path="/faq"  />
      </Switch>
    </Router>
  );
}
export default App;

//git remote set-url origin https://github.com/kegoba/frontendtask.git