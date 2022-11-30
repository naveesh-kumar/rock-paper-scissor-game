import React from "react";
import { withStyles } from "@material-ui/core";
import { theme } from "./theme";

import ScoreBoard from "./components/ScoreBoard";
import MainBoardGame from "./components/MainGameBoard";

const styles = {
  "@global body": {
    padding: 0,
    margin: 0,
  },
  root: {
    background: theme.palette.background["radial"],
    color: theme.palette.neutral["white"],
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& *": {
      boxSizing: "border-box",
    },
  },
};

function App({ classes }) {
  return (
    <div className={classes.root}>
      <ScoreBoard />
      <MainBoardGame />
    </div>
  );
}

export default withStyles(styles)(App);
