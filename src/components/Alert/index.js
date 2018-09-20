import React from "react";

import Snackbar from "@material-ui/core/Snackbar";

import { withStyles } from "@material-ui/core/styles";

const Alert = ({ classes, open, message, closeAlert }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    autoHideDuration={5000}
    open={open}
    onClose={closeAlert}
    ContentProps={{
      "aria-describedby": "message-id"
    }}
    message={<span id="message-id">{message}</span>}
  />
);

export default withStyles(null)(Alert);
