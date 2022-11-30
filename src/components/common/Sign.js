import React from "react";
import { withStyles } from "@material-ui/core";
import { theme } from "../../theme";
import Rock from "./../../images/icon-rock.svg";
import Paper from "./../../images/icon-paper.svg";
import Scissor from "./../../images/icon-scissors.svg";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: (props) => (props.isLarge ? "180px" : "140px"),
    height: (props) => (props.isLarge ? "180px" : "140px"),
    cursor: (props) => (props.isLarge ? "" : "pointer"),
    "& img": {
      zIndex: "10",
      transform: (props) => (props.isLarge ? "scale(1.1)" : ""),
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    "&::after": {
      content: "''",
      background: (props) => getBgColor(props.name),
      width: (props) => (props.isLarge ? "180px" : "140px"),
      height: (props) => (props.isLarge ? "180px" : "140px"),
      borderRadius: "50%",
      position: "absolute",
      boxShadow: (props) =>
        props.name == "paper"
          ? "0px 5px 0px 1px hsl(230, 89%, 55%)"
          : props.name == "rock"
          ? "0px 5px 0px 1px hsl(349, 71%, 32%)"
          : "0px 5px 0px 1px hsl(39, 89%, 39%)",
    },
    "&::before": {
      content: "''",
      width: (props) => (props.isLarge ? "130px" : "100px"),
      height: (props) => (props.isLarge ? "130px" : "100px"),
      backgroundColor: "white",
      borderRadius: "50%",
      position: "absolute",
      zIndex: "2",
      boxShadow: "0px -5px 0px 1px lightgray",
    },
  },
};

function getBgColor(name) {
  switch (name) {
    case "paper":
      return theme.palette.gradients["paperGradient"];
    case "scissor":
      return theme.palette.gradients["scissorsGradient"];
    case "rock":
      return theme.palette.gradients["rockGradient"];
    default:
      return "white";
  }
}

const Sign = ({ classes, name, handleOnClick }) => {
  const getSvg = React.useCallback(
    (name) => {
      switch (name) {
        case "paper":
          return Paper;
        case "scissor":
          return Scissor;
        case "rock":
          return Rock;
        default:
          return "";
      }
    },
    [name]
  );

  return (
    <div className={classes.root} onClick={(e) => handleOnClick(e, name)}>
      <img src={getSvg(name)} alt={name} />
    </div>
  );
};

export default withStyles(styles)(Sign);
