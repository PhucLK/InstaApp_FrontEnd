import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 64,
    display: "flex",
    justifyContent: "center",
  },

  formContainer: {
    width: 420,
    minHeight: 200,
    borderRadius: 2,
  },
});

function Accounts() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.formContainer}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Accounts;
