import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { theme } from "../theme";

import Rock from "./../images/icon-rock.svg";
import Paper from "./../images/icon-paper.svg";
import Scissor from "./../images/icon-scissors.svg";
import Sign from "./common/Sign";
import Triangle from "./../images/bg-triangle.svg";
import RulesModal from "./RulesModal";

const styles = {
  root: {
    height: "400px",
    position: "relative",
  },
  mainboard: {
    display: "flex",
    width: "400px",
    height: "100%",
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
  rules: {
    textTransform: "uppercase",
    border: `1px solid ${theme.palette.neutral["white"]}`,
    width: "120px",
    textAlign: "center",
    borderRadius: "12px",
    padding: "5px",
    position: "absolute",
    right: "0",
    cursor: "pointer",
    "& h6": {
      fontFamily: theme.typography.fontFamily,
      fontWeight: "400",
    },
  },
};

const MainBoardGame = ({ classes }) => {
  const [rulesModalOpen, setRulesModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setRulesModalOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.mainboard}>
          <Sign svg={Paper} name="paper" />
          <Sign svg={Scissor} name="scissor" />
          <Sign svg={Rock} name="rock" />
        </div>
        <div className={classes.rules} onClick={() => setRulesModalOpen(true)}>
          <Typography variant="subtitle1">rules</Typography>
        </div>
      </div>
      <RulesModal open={rulesModalOpen} handleModalClose={handleModalClose} />
    </>
  );
};

export default withStyles(styles)(MainBoardGame);
