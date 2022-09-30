import React from "react";
import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";
import { SnackbarProvider } from 'notistack';

import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";
import Resume from '../pages/Resume';

export const App = () => {
    logCredits();

    return (
      <SnackbarProvider maxSnack={1}>
        <ThemeProvider>
          <CssBaseline />
          <Router>
            <HelmetMeta />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/resume" exact component={Resume} />
              <Route path="*" render={() => <Redirect to={{ pathname: '/' }} />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </SnackbarProvider>
    );
};
