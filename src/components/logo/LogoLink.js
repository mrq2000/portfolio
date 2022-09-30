import React from "react";
import { Link as MuiLink, Tooltip, Zoom } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Resume from "../../settings/resume.json";
import { Logo } from "./Logo";

const useStyles = makeStyles((theme) => ({
  svg: {
    position: "fixed",
    width: "60px",
    height: "60px",
    top: theme.spacing(2),
    left: theme.spacing(5.5),
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    borderRadius: "50%",
  },
}));

export const LogoLink = () => {
  const classes = useStyles();

  return (
    <Link to="/">
      <Tooltip
        title={Resume.basics.name}
        placement="right"
        TransitionComponent={Zoom}
      >
        <MuiLink
            variant="h6"
            underline="none"
            color="inherit"
            noWrap
            className={classes.svg}
        >
          <Logo />
        </MuiLink>
      </Tooltip>
    </Link>
  );
};
