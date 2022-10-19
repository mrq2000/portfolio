import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Tooltip } from '@material-ui/core';
import { Gift, User } from 'react-feather';

import me from '../../assets/me.jpg';

import reactLogo from '../.././assets/skills/react.png';

import nextjsLogo from '../.././assets/skills/nextjs.png';
import githubLogo from '../.././assets/skills/github.png';
import nestjsLogo from '../.././assets/skills/nestjs.png';
import expressLogo from '../.././assets/skills/express.jpg';
import solidtyLogo from '../.././assets/skills/solidty.png';

import vueLogo from '../.././assets/skills/vue.png';
import dockerLogo from '../.././assets/skills/docker.png';
import graphqlLogo from '../.././assets/skills/graphql.png';

const useStyles = makeStyles(() => ({
  avatar: {
    objectFit: 'cover',
  },
  skillLogo: {
    width: '3vw',
    height: '3vw',
    objectFit: 'cover',
    borderRadius: '100%',
  }
}));

const SKILL_INFOS = [
  {
    title: 'CONFIDIENT',
    skills: [
      {
        title: 'React',
        img: reactLogo,
      },
      {
        title: 'Solidty',
        img: solidtyLogo,
      }
    ]
  },
  {
    title: 'GOOD AT',
    skills: [
      {
        title: 'Nextjs',
        img: nextjsLogo,
      },
      {
        title: 'Github',
        img: githubLogo,
      },
      {
        title: 'Nestjs',
        img: nestjsLogo,
      },
      {
        title: 'Express',
        img: expressLogo,
      }
    ]
  },
  {
    title: 'KNOWLEDGE',
    skills: [
      {
        title: 'Vue',
        img: vueLogo,
      },
      {
        title: 'Docker',
        img: dockerLogo,
      },
      {
        title: 'Graphql',
        img: graphqlLogo,
      },
    ]
  }
]

const CVSkillInfo = ({ mainColor }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" flex={1}>
      <Box zIndex={100} position="relative" component="img" width="18vw" height="21vw" border={`0.4vw solid ${mainColor}`} borderRadius="50%" src={me} className={classes.avatar}>
      </Box>
      <Box zIndex={2} position="relative" width="80%" flex={1} display="flex">
        <Box bgcolor={mainColor} borderRadius="60px" position="absolute" left="-0.6vw" top="-6.5vw" height="calc(100% + 6.5vw)" width="100%" />
        <Box bgcolor="#292a3c" borderRadius="60px" position="relative" top="-7vw" height="calc(100% + 6.5vw)" width="100%">
          <Box pt="10vw" px="2vw" color="white">
            <Box mb="1.2vw" display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <User color={mainColor} style={{ width: '1.5vw' }} />
                <Box ml="0.5vw" sx={{ fontSize: '1.2vw' }}>
                  MALE
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                <Gift color={mainColor} style={{ width: '1.5vw'}} />
                <Box ml="0.5vw" sx={{ fontSize: '1.2vw' }}>
                  March 4, 2000
                </Box>
              </Box>
            </Box>

            {SKILL_INFOS.map((skillInfo) => (
              <Box mb="2vw">
                <Box sx={{ color: mainColor, fontSize: '1.8vw' }}>
                  {skillInfo.title}
                </Box>
                <Box sx={{ backgroundColor: mainColor, height: '0.3vw', width: '100%' }} component="hr" />
                <Box display="flex" flexDirection="row" mt="1vw">
                  {
                    skillInfo.skills.map((skill) => (
                      <Box ml="0.4vw">
                        <Tooltip title={skill.title} placement="top">
                          <img src={skill.img} className={classes.skillLogo} alt={skill.title} />
                        </Tooltip>
                      </Box>
                    ))
                  }
                </Box>
              </Box>
            ))}

            <Box mb="2vw">
              <Box sx={{ color: mainColor, fontSize: '1.8vw' }}>
                LANGUAGES
              </Box>
              <Box sx={{ backgroundColor: mainColor, height: '0.3vw', width: '100%' }} component="hr" mb="1vw" />
              <Box>
                English: 770 TOEIC
              </Box>
              <Box>
                Vietnamese: Native
              </Box>
            </Box>

            <Box>
              <Box sx={{ color: mainColor, fontSize: '1.8vw' }}>
                CONTACT
              </Box>
              <Box sx={{ backgroundColor: mainColor, height: '0.3vw', width: '100%' }} component="hr" mb="1vw" />
              <Box sx={{ color: mainColor }}>
                PHONE:
              </Box>
              <Box>
                +84 979980300
              </Box>

              <Box sx={{ color: mainColor }} mt="0.8vw">
                EMAIL:
              </Box>
              <Box>
                anhchang1412@gmail.com
              </Box>

              <Box sx={{ color: mainColor }} mt="0.8vw">
                GITHUB:
              </Box>
              <Box>
                <a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/mrq2000" target="_blank" rel="noreferrer">
                  https://github.com/mrq2000
                </a>
              </Box>

              <Box sx={{ color: mainColor }} mt="0.8vw">
                WEBSITE:
              </Box>
              <Box>
                <a style={{ color: 'white', textDecoration: 'none' }} href="https://portfolio.quocpham.info/" target="_blank" rel="noreferrer">
                  https://portfolio.quocpham.info
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default CVSkillInfo;
