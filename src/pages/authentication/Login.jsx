import { useState, React } from "react";
// import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FormControl } from "@mui/material";
import { TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "components/MUI/Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Navigate } from "react-router-dom";
import SignUp from "pages/authentication/SignUp";

const useStyle = makeStyles({
  wrapper: {
    border: "1px solid #ccc !important",
    width: 420,
    minHeight: 200,
    borderRadius: 2,
    padding: "0 24px 24px 24px ",
  },
  form_logo: {
    display: "flex",
    justifyContent: "center",
    width: "10%",
    margin: "5% auto",
  },
  form_control: {
    display: "flex !important",
    padding: "0 24px 24px 24px ",
    justifyContent: "center !important",
    width: "100%",
    maxWidth: "80%",
    margin: "5% auto !important",
  },
  form_input: {
    borderRadius: "2px",
  },
  form_helpText: {
    display: "flex",
    justifyContent: "center",
    margin: "5% auto",
  },

  showPassword: {
    textAlign: "right !important",
    marginTop: "-12%",
    marginLeft: "85%",
    zIndex: "1",
    position: "relative",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
    width: "30px",
    // color: "rgb(38,38,38) !important",
  },
  forgotPass: {
    display: "flex",
    justifyContent: "center",
    margin: "5% auto",
    textDecoration: "none",
    fontSize: "13px",
    color: "rgb(0,55,107)",
  },
  btn: {
    backgroundColor: "rgb(0,145,246) !important",
  },
  fb_btn: {
    backgroundColor: "white !important",
    color: "rgb(56,81,133) !important",
    textTransform: "none !important",
  },
  boxes: {
    display: "flex",
    justifyContent: "center",
    margin: "5% auto",
  },
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const classes = useStyle();
  return (
    <>
      <div className={classes.wrapper}>
        <Logo variant="div">Instagram</Logo>
        {/* <img src={Logo} className={classes.form_logo} alt="Logo"></img> */}
        <FormControl className={classes.form_control}>
          <TextField
            className={classes.form_input}
            id="filled-search"
            label="Phone number, username, or email"
            type="text"
            variant="filled"
          />
          <TextField
            className={classes.form_input}
            sx={{ mt: 1 }}
            id="filled-search"
            label="Password"
            variant="filled"
            type={showPassword ? "text" : "password"} 
          />
          <p
            className={classes.showPassword}
            // aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </p>
          <Button className={classes.btn} sx={{ mt: 4 }} variant="contained">
            Log in
          </Button>
          <span className={classes.form_helpText} id="my-helper-text">
            OR
          </span>
          <Button
            className={classes.fb_btn}
            variant="text"
            color="primary"
            startIcon={<FacebookIcon />}
          >
            Log in with Facebook
          </Button>

          <Link className={classes.forgotPass} to="/resetpassword">
            Forgot password?
          </Link>
        </FormControl>
      </div>
      <SignUp />
    </>
  );
}

export default Login;
