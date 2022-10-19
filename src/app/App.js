import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { useSnackbar } from 'notistack';
import { useMediaQuery } from '@material-ui/core';

import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";
import Resume from '../pages/Resume';

const ROUTE = () => {
  const { enqueueSnackbar } = useSnackbar();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))

  useEffect(() => {
    if (isMobile) {
      enqueueSnackbar('This site is not responsive! Trying another device for the better experience', {
        variant: 'info', anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        }
      })
    }
  }, [isMobile, enqueueSnackbar]);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/resume" exact component={Resume} />
      <Route path="*" render={() => <Redirect to={{ pathname: '/' }} />} />
    </Switch>
  )
}

export const App = () => {
    logCredits();


    return (
      <SnackbarProvider maxSnack={1}>
        <ThemeProvider>
          <CssBaseline />
          <Router basename="/#">
            <HelmetMeta />
            
            <ROUTE />
          </Router>
        </ThemeProvider>
      </SnackbarProvider>
    );
};
