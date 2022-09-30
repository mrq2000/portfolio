import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useMediaQuery } from '@material-ui/core';

import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))

  useEffect(() => {
    if (isMobile) { 
      enqueueSnackbar('This site is not responsive! Trying another device for the better experience', { variant: 'info', anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      } })
    }
  }, [isMobile, enqueueSnackbar]);

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <LogoLink />
        <Content />
        <ThemeToggle />
        <SocialIcons />
        <Resume />
      </div>
      <Works />
      <About />
    </>
  );
};
