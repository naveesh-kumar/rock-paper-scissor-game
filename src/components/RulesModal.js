import React from "react";
import {
  Card,
  IconButton,
  Modal,
  Typography,
  withStyles,
} from "@material-ui/core";
import { theme } from "../theme";

import Close from "./../images/icon-close.svg";
import RulesSvg from "./../images/image-rules.svg";

const styles = {
  presentation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "10px",
  },

  modal: {
    width: "350px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    padding: "20px",
    boxSizing: "border-box",
    "& h5": {
      alignSelf: "start",
      fontWeight: "700",
      fontFamily: theme.typography.fontFamily,
      textTransform: "uppercase",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

const RulesModal = ({ classes, open, handleModalClose }) => {
  return (
    <Modal
      open={open}
      className={classes.presentation}
      onClose={handleModalClose}
    >
      <Card className={classes.modal}>
        <IconButton className={classes.closeBtn} onClick={handleModalClose}>
          <img src={Close} alt="close" width={15} height={15} />
        </IconButton>
        <Typography variant="h5">rules</Typography>
        <img src={RulesSvg} alt="rules" width={250} />
      </Card>
    </Modal>
  );
};

export default withStyles(styles)(RulesModal);
