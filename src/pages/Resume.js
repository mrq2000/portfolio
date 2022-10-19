import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactToPrint from 'react-to-print';

import Wheel from '../assets/wheel.png';
import RopeImg from '../assets/rope.png';

import { LogoLink } from '../components/logo/LogoLink';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import CVSkillInfo from '../components/resume/CVSkillInfo';
import CVPersonalInfo from '../components/resume/CVPersonalInfo';

const ROPE_LENGTH = '200px';

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
  rope: {
    zIndex: '2',
    background: `url(${RopeImg}) repeat 0 0 transparent`,
    backgroundSize: 'contain',
    width: '20px',
  },
  pullRope: {
    position: 'fixed',
    top: '-100px',
    bottom: '0',
    left: '5vw',
    height: '800px',
    transform: 'rotate(20deg)',
    transformOrigin: '0% 100%',
  },
  ropeTopLeft: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '45vw',
    height: ROPE_LENGTH,
  },
  ropeTopRight: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '75vw',
    height: ROPE_LENGTH,
  },
  cvContainer: {
    zIndex: 19,
    position: 'absolute',
    top: ROPE_LENGTH,
    width: '70vw',
    height: '99vw',
    left: '25vw',
    marginBottom: '50px',
    padding: '1vw',
    backgroundColor: 'white',
    boxShadow: '0 8px 60px 0 rgba(103, 151, 255, .11), 0 12px 90px 0 rgba(103, 151, 255, .11)'
  },
  wheel: {
    width: '150px',
    objecFit: 'cover',
    zIndex: 3,
    position: 'fixed',
    left: 'calc(5vw - 67px)',
    top: '620px',
  },
  cvMain: {
    borderTopRightRadius: '15%',
    borderBottomRightRadius: '15%',
  }
}));

const Resume = () => {
  const classes = useStyles();
  const pullRopeRef = useRef();
  const wheelRef = useRef();
  const cvRef = useRef();
  const [mainColor, setMainColor] = useState('#0076af');
  const [isPrinting, setIsPrinting] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#root",
          scrub: 3,
          start: "top top",
        }
      })
      .to(pullRopeRef.current, {
        backgroundPosition: "0px -2247px",
        duration: 0.5,
        ease: "none"
      });
    
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#root",
          scrub: 3,
          start: "top top",
        }
      })
      .to(wheelRef.current, {
        rotation: 360 * 5,
        duration: 0.5,
        ease: "none"
      })
    }
  , [])

  return (
    <Box height="120vw">
      <LogoLink />
      <ThemeToggle />
      <SocialIcons />

      <div className={`${classes.rope} ${classes.pullRope}`} ref={pullRopeRef}></div>
      <div className={`${classes.rope} ${classes.ropeTopLeft}`}></div>
      <div className={`${classes.rope} ${classes.ropeTopRight}`}></div>
      <img className={classes.wheel} src={Wheel} alt="img" ref={wheelRef}></img>

      <ReactToPrint
        trigger={() => (
          <Box sx={{ position: 'fixed', bottom: '2vw', left: '1vw' }}>
            <Button
              variant="contained"
              endIcon={isPrinting ? <CircularProgress size={16} style={{ color: '#fff' }} /> : <GetAppIcon />}
              style={{ backgroundColor: mainColor, color: '#fff', textTransform: 'inherit' }}
              disabled={isPrinting}
            >
              Download
            </Button>
          </Box>
        )}
        onBeforePrint={() => setIsPrinting(true)}
        onAfterPrint={() => setIsPrinting(false)}
        content={() => cvRef.current}
      />
    
      <div className={classes.cvContainer} ref={cvRef} id="printJS-form">
        <Box display="flex" height="100%" bgcolor="#0076af" sx={{ fontSize: '1.2vw' }}>
          <Box display='flex' flexGrow={1} height="100%" bgcolor="#fff" className={classes.cvMain} py="3vw">
            <Box width="45%"  flex={1} display='flex'>
              <CVSkillInfo mainColor={mainColor} />
            </Box>

            <Box width="55%">
              <CVPersonalInfo mainColor={mainColor} />
            </Box>
          </Box>
          <Box width="2.5%" height="100%" />
        </Box>
      </div>
    </Box>
  )
};

export default Resume;
