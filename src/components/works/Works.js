/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Card, CardContent, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from 'react-material-ui-carousel'

import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Bixel NFT', 
      description: <>A breakthrough in NFT world! It's my personal project with quick idea cross in my mind. You can check it out on: <a href="https://bixel-nft.com/" target="_blank" rel="noreferrer">https://bixel-nft.com/</a> (It was closed and not woriking right now, maybe uptrend i will open it again)</>,
      images: [`/images/bixel/1.png`, `/images/bixel/2.png`, `/images/bixel/3.png`],
    },
    {
      id: 2,
      title: 'My Social Network',
      description: <>A project in my university using React, Express, Socket for chat realtime, S3 for saving image, with many function was cloned like facebook.</>,
      images: [`/images/mysocial/1.png`, `/images/mysocial/2.png`, `/images/mysocial/3.png`, `/images/mysocial/4.png`],
    },
    {
      id: 3,
      title: 'KILL YOUR TIME',
      description: <>A small project when i was second year student, it's a funny game using Reactnative. You can download in <a target="_blank" rel="noreferrer" href='https://play.google.com/store/apps/details?id=com.KaiPham.KillYourTime&hl=vi&gl=US'>GooglePlay</a></>,
      images: [`/images/killyourtime/1.jpg`, `/images/killyourtime/2.jpg`, `/images/killyourtime/3.jpg`],
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        <Box width="100%" className="work_title">
          <TextDecrypt text="My Personal Project" />
        </Box>
        {projects.map((project, index) => (
          <Box className="project" key={project.id} flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}>
            <div className="__img_wrapper">
              {
                <Carousel    
                  indicators={false}
                  interval={8000}
                  timeout={800}
                  animation="slide"
                >
                  {
                    project.images.map((image, index) => (
                      <Box key={index} display="flex" justifyContent="center">
                        <img src={image} alt="work" className="__img_work" />
                      </Box>
                    ))
                  }
                </Carousel>
              }
            </div>

            <Card className="__content_wrapper">
              <CardContent>
                <h3 className="title">
                  <TextDecrypt text={ project.id + '. ' + project.title } />
                </h3>
                <p className="description">
                  { project.description }
                </p>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Container>
    </section>
  );
};
