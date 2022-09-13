/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { Typography, Box } from "@material-ui/core";
import { useState } from "react";
import { ThemeContext } from "../theme/ThemeProvider";


import "./SideNavbar.css";

export const SideNavbar = () => {
  const { theme } = useContext(ThemeContext);

  const [activeNav, setActiveNav] = useState('#');

  return (
    <Box component="nav" sx={{
      '& a': {
        color: theme === "light" ? '#575757' : '#fff'
      },
    }}>
      <a href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography>
          Home
        </Typography>
      </a>
      <a href="#works"
        onClick={() => setActiveNav('#works')}
        className={activeNav === '#works' ? 'active' : ''}
      >
        <Typography>
          Projects
        </Typography>
      </a>
      <a href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <Typography>
          About
        </Typography>
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography>
          Contact
        </Typography>
      </a>
    </Box>
  );
};