import React, { useState, useEffect } from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
    marginLeft: -theme.spacing(1),
  },
}));


const DEFAULT_TITLE = `${FirstName} ${LastName}`;
const DEFAULT_SUBTITLE = `${Resume.basics.job}`

export const Content = () => {
  const classes = useStyles();
  const [title, setTitle] = useState(DEFAULT_TITLE);

  useEffect(() => {
    setTimeout(() => {
      if (title === DEFAULT_TITLE) {
        setTitle(`${Resume.basics.subTitle}`)
      } else {
        setTitle(DEFAULT_TITLE);
      }
    }, 5000);
  }, [title]);

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
          <TextDecrypt text={title} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
          <TextDecrypt text={DEFAULT_SUBTITLE} />
        </Typography>
      </div>
    </Container>
  );
};
