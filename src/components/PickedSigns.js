import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import Sign from "./common/Sign";

const styles = {
  root: {
    width: "500px",
    height: "400px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  picked: {
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
};

const PickedSigns = ({ classes, signSelected }) => {
  return (
    <div className={classes.root}>
      <div className={classes.picked}>
        <Typography variant="h6">YOU PICKED</Typography>
        <Sign name={signSelected} isLarge={true} />
      </div>
      <div className={classes.picked}>
        <Typography variant="h6">HOME PICKED</Typography>
        <Sign name="paper" isLarge={true} />
      </div>
    </div>
  );
};

export default withStyles(styles)(PickedSigns);
