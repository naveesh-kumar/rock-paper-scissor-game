import React from "react";
import { withStyles } from "@material-ui/core";
import { theme } from "./theme";

import ScoreBoard from "./components/ScoreBoard";

const styles = {
  "@global body": {
    padding: 0,
    margin: 0,
  },
  root: {
    backgroundColor: theme.palette.neutral["dark"],
    color: theme.palette.neutral["white"],
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};

function App({ classes }) {
  return (
    <div className={classes.root}>
      <ScoreBoard />
    </div>
  );
}

export default withStyles(styles)(App);
