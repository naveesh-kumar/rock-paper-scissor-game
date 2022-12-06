import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import { theme } from "../theme";
import Sign from "./common/Sign";
import Result from "./Result";

const styles = {
  root: {
    width: "500px",
    height: "400px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down(740)]: {
      width: "355px",
      flexWrap: "wrap",
    },
  },
  homePickedRoot: {
    width: "700px",
    height: "400px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down(740)]: {
      width: "355px",
      flexWrap: "wrap",
      height: "280px",
    },
  },
  picked: {
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  result: {
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    justifyContent: "center",
    gap: "20px",
    alignItems: "center",
    "& h4": {
      fontWeight: "700",
    },
    "& button": {
      padding: "8px 22px",
      fontSize: "12px",
      fontWeight: "700",
      color: "hsl(349, 71%, 52%)",
    },
    [theme.breakpoints.down(740)]: {
      order: 3,
    },
  },
};

const PickedSigns = ({ classes, signSelected, setIsPicked, setScore }) => {
  const [homePicked, setHomePicked] = React.useState("");
  const [result, setResult] = React.useState("");

  const getHomePickedSign = () => {
    let signs = ["rock", "paper", "scissor"];
    return signs[Math.floor(Math.random() * signs.length)];
  };

  React.useEffect(() => {
    let homePickedSign = getHomePickedSign();
    setTimeout(() => {
      setHomePicked(homePickedSign);
    }, 3000);
  }, []);

  return (
    <div className={homePicked ? classes.homePickedRoot : classes.root}>
      <div className={classes.picked}>
        <Typography variant="h6">YOU PICKED</Typography>
        <Sign name={signSelected} isLarge={true} />
      </div>
      {homePicked && (
        <div className={classes.result}>
          <Result
            homePicked={homePicked}
            userPicked={signSelected}
            setScore={setScore}
            result={result}
            setResult={setResult}
          />
          <Button
            variant="contained"
            disableRipple
            onClick={() => setIsPicked(false)}
          >
            play again
          </Button>
        </div>
      )}
      <div className={classes.picked}>
        <Typography variant="h6">THE HOUSE PICKED</Typography>
        <Sign name={homePicked} isLarge={true} />
      </div>
    </div>
  );
};

export default withStyles(styles)(PickedSigns);
