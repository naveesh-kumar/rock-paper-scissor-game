import React from "react";
import { Paper, Typography, withStyles } from "@material-ui/core";
import { theme } from "../theme";

import logo from "./../images/logo.svg";

const styles = {
  root: {
    width: "500px",
    height: "120px",
    border: `3px solid ${theme.palette.neutral["headerOutline"]}`,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    [theme.breakpoints.down(740)]: {
      width: "355px",
    },
  },
  scoreTextContainer: {
    height: "80px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "8px",
    "& h6": {
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: theme.palette.neutral["score"],
      fontWeight: "600",
      fontFamily: theme.typography.fontFamily,
    },
    "& h3": {
      color: theme.palette.neutral["dark"],
      fontWeight: "700",
      fontFamily: theme.typography.fontFamily,
      fontSize: "35px",
    },
  },
};

const ScoreBoard = ({ classes, score }) => {
  return (
    <div className={classes.root}>
      <img src={logo} height={80} alt="logo" />
      <Paper className={classes.scoreTextContainer}>
        <Typography variant="caption" component="h6">
          score
        </Typography>
        <Typography variant="h3">{score}</Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ScoreBoard);
