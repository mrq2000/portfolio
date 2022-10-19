import React from 'react';
import { Box } from '@material-ui/core';
import { Briefcase, Circle } from 'react-feather';

const workExperiences = [
  { company: 'Mushashi', time: '06/2019 - 03/2020', 
    description: `It's outsource company, i joined as an intern and did some tasks in frontend with laravel and vuejs.`
  },
  { company: 'Startup PANAMA', time: '03/2020 - 06/2020',
    description: `It's ecommerce startup project using Reactjs. Joined as frontend developer.`
  },
  { company: 'AMELA', time: '06/2020 - 06/2021',
    description: 'Do an internal project for company using Reactjs and Nodejs and join some outsource project, training new member.'
  },
  { company: 'CODELAB', time: '06/2021 - 03/2022', 
    description: 'Got some experience in mentoring and teaching code, DevOps skills. Do an product project using Reactjs, Nodejs and NFT product using Solidty.'
  },
  { company: 'Product HECTAGON', time: '03/2022 - Now',
    description: 'A Web3 project for DAO. I joined as fullstack developer, make frontend base (using React), review smart contract (using Solidty), wirte backend unit test (Nestjs),...'
  },
]

const CVPersonalInfo = ({ mainColor }) => {
  const pxPerVw = document.documentElement.clientWidth / 100;

  return (
    <Box pt="2vw" pr="3vw">
      <Box sx={{ color: mainColor, fontSize: '4vw', fontWeight: 'bold', letterSpacing: '-0.1vw' }}>
        QUOC PHAM.
      </Box>

      <Box sx={{ fontSize: '1.5vw', fontWeight: '400', letterSpacing: '0.2vw', color: '#403e3e' }}>
        FULLSTACK DEVELOPER
      </Box>

      <Box my="1vw" sx={{ backgroundColor: mainColor, height: '0.3vw', width: '6vw' }} component="hr" />

      <Box sx={{ fontSize: '1.1vw', color: '#5d5d5d' }}>
        Hi! I'm Quoc, a guy who loves to solve hard problems and learn new things.
        Wanna create more awesome projects with unique ideas that make me can do it all day.
      </Box>

      <Box display="flex" alignItems="center" mt="2vw">
        <Briefcase color={mainColor} style={{ width: '2.2vw' }} />

        <Box width="100%" sx={{ ml: "1vw" }}>
          <Box sx={{ fontSize: '1.5vw', fontWeight: '500', letterSpacing: '0.1vw', color: mainColor }}>
            WORKING EXPERIENCE
          </Box>
          <Box my="0.5vw" sx={{ backgroundColor: mainColor, height: '0.1vw', width: '100%' }} component="hr" />
        </Box>
      </Box>

      <Box mt="1.5vw">
        {
          workExperiences.map((work) => (
            <Box ml="3.2vw">
              <Box display="flex" flex={1} alignItems="center">
                <Circle color={mainColor} strokeWidth={pxPerVw * 0.2} width="0.8vw" />
                <Box sx={{ fontWeight: '500', fontSize: '1.2vw', letterSpacing: '0.02vw', color: '#403e3e', ml: '0.5vw' }}>
                  {work.company}
                </Box>
                <Box sx={{ fontSize: '1vw', letterSpacing: '0.02vw', color: '#5d5d5d', ml: '0.5vw' }}>
                  ({work.time})
                </Box>
              </Box>

              <Box sx={{ borderLeft: `0.15vw solid ${mainColor}`, color: '#5d5d5d', fontSize: '1vw' }} pl="0.75vw" ml="0.3vw" pb="1.5vw" pt="0.2vw">
                {work.description}
              </Box>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
};

export default CVPersonalInfo;
