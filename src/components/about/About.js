/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/me.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = 
    <>
      I'm {FirstName} {LastName}, a guy love sovle hard problem and learn something new. 
      <div>This website was customize using <a target="_blank" rel="noreferrer" href="https://github.com/taniyow/react-portfolio">React portfolio template</a></div>
      <div>For work you can check out my resume below</div>
    </>;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <img className="_img" src={profile} alt="avatar" />
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
