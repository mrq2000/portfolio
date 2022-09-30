import React from 'react';
import { Box } from '@material-ui/core';

const CVPersonalInfo = ({ mainColor }) => {
  return (
    <Box pt="2vw" pr="3vw">
      <Box sx={{ color: mainColor, fontSize: '4vw', fontWeight: 'bold', letterSpacing: '-0.1vw' }}>
        QUOC PHAM.
      </Box>

      <Box sx={{ fontSize: '1.5vw', fontWeight: '400', letterSpacing: '0.2vw' }}>
        FULLSTACK DEVELOPER
      </Box>

      <Box my="1vw" sx={{ backgroundColor: mainColor, height: '0.3vw', width: '6vw' }} component="hr" />

      <Box sx={{ fontSize: '1.1vw', color: '#5d5d5d' }}>
        Hi! I'm Quoc, a guy who loves to solve hard problems and learn new things. 
        Wanna create more awesome projects with unique ideas that make me can do it all day.
      </Box>

      <Box mt="10vw" sx={{ color: mainColor, fontSize: '4vw', fontWeight: 'bold', letterSpacing: '-0.1vw' }}>
        Comming soon :))
      </Box>
    </Box>
  )
};

export default CVPersonalInfo;
