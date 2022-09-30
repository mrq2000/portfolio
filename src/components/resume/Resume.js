import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as MuiLink, Tooltip } from '@material-ui/core';

import { Link } from "react-router-dom";
import {
  ResumeIcon
} from '../content/ResumeButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <Link to="/resume">
      <Tooltip title="Resume">
        <MuiLink
          color='inherit'
          underline='none'
          rel='noopener noreferrer'
          className={classes.footerText}
        >
          <ResumeIcon />
        </MuiLink>
      </Tooltip>
    </Link>
  );
};
