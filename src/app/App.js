import React from "react";

import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

export const App = () => {
    logCredits();

    return (
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" render={() => <Redirect to={{ pathname: '/' }} />} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
};
