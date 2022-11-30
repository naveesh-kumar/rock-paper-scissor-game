import React from "react";
import { withStyles } from "@material-ui/core";
import Rock from "./../images/icon-rock.svg";
import Paper from "./../images/icon-paper.svg";
import Scissor from "./../images/icon-scissors.svg";
import Sign from "./common/Sign";
import Triangle from "./../images/bg-triangle.svg";

const styles = {
  root: {
    display: "flex",
    width: "400px",
    height: "400px",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    "&::before": {
      content: "''",
      background: `url(${Triangle}) no-repeat`,
      width: "310px",
      height: "250px",
      position: "absolute",
    },
  },
};

const MainBoardGame = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Sign svg={Paper} name="paper" />
      <Sign svg={Scissor} name="scissor" />
      <Sign svg={Rock} name="rock" />
    </div>
  );
};

export default withStyles(styles)(MainBoardGame);
