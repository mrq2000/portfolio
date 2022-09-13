import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Tooltip } from '@material-ui/core';
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
    <Tooltip title="This is resume but i did not update it :)">
      <Link
        color='inherit'
        underline='none'
        // href= {`pdf`}
        target='_blank'
        rel='noopener noreferrer'
        className={classes.footerText}
      >

        <ResumeIcon />
      </Link>
    </Tooltip>
  );
};
