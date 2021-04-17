import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
