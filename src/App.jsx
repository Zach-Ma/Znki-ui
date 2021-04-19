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
import { znkiTheme } from "./styles/themeProvider";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={znkiTheme}>
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
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
