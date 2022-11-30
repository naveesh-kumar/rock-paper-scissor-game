import React from "react";
import { withStyles } from "@material-ui/core";
import { theme } from "../../theme";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "140px",
    height: "140px",
    cursor: "pointer",
    "& img": {
      zIndex: "10",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    "&::after": {
      content: "''",
      background: (props) => getBgColor(props.name),
      width: "140px",
      height: "140px",
      borderRadius: "140px",
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
      width: "100px",
      height: "100px",
      backgroundColor: "white",
      borderRadius: "100px",
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

const Sign = ({ classes, svg, name }) => {
  return (
    <div className={classes.root}>
      <img src={svg} alt={name} />
    </div>
  );
};

export default withStyles(styles)(Sign);
