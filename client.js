/* Import statements */
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./pages/Layout.jsx";
import 'bootstrap/scss/bootstrap.scss';
/* import BrowserRouter from 'react-router-dom' */
import './style.scss';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/app" component={Layout} />
          <Redirect to="/app" />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
