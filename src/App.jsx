import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Auth from "./pages/Auth";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
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
    </Fragment>
  );
}

export default App;
