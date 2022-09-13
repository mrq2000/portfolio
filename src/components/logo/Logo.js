import React from "react";
import { Box } from '@material-ui/core';

import logo from '../../assets/logo.png';


export const Logo = () => {
    return (
      <Box src={logo} component="img" width="100%" />
    );
};
