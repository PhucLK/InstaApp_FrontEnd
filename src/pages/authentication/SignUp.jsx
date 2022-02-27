import { Typography, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  boxes: {
    width: "100%",
    padding: "24px 24px 24px 24px",
    display: "flex",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: 2,
    margin: "5% auto !important",
    border: "1px solid #ccc !important",
    borderRadius: 2,
  },
  signUp: {
    color: "rgb(0,145,246)",
    textDecoration: "none",
  },
});

function SignUp() {
  const classes = useStyle();
  return (
    <Box sx={{ mt: 10 }} className={classes.boxes}>
      <Typography sx={{ pt: 20 }} variant="span">
        Don't have an account? {"  "}
        <Link className={classes.signUp} to="/signup">
          Sign up
        </Link>
      </Typography>
    </Box>
  );
}

export default SignUp;
