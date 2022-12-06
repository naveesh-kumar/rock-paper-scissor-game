import React from "react";
import { Typography } from "@material-ui/core";

const Result = ({ homePicked, userPicked, setScore, result, setResult }) => {
  //new Map([userPicked, {homePicked options}])
  const signPriority = new Map([
    ["paper", { scissor: 0, rock: 1 }],
    ["scissor", { paper: 1, rock: 0 }],
    ["rock", { paper: 0, scissor: 1 }],
  ]);

  const findResult = () => {
    if (homePicked === userPicked) return "draw";
    let priority = signPriority.get(userPicked)[homePicked];
    return priority === 1 ? "you won" : "you lose";
  };

  React.useEffect(() => {
    let result = findResult();
    setResult(result);
    if (result === "you won") setScore((prevScore) => prevScore + 1);
  }, []);

  return <Typography variant="h4">{result}</Typography>;
};

export default Result;
