import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";

import CompanyList from "./components/companies";
import PriceTargetList from "./components/price_targets";

const App = () => {
  const linkStyles = {
    color: "white",
    textDecoration: "none",
    margin: "0px 5px",
  };

  return (
    <Router>
      <CssBaseline />
      <div>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Link to="/" style={linkStyles}>
              Home
            </Link>
            <Link to="/companies" style={linkStyles}>
              Companies
            </Link>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Switch>
          <Route path="/companies">
            <CompanyList />
          </Route>
          <Route exact path="/">
            <PriceTargetList />
          </Route>
          <Route path="*">
            <h1>Error Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
