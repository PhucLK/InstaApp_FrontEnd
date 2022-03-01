import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormControl, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "assets/images/login_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import SignUp from "pages/authentication/SignUp";

const useStyle = makeStyles({
  "@global": {
    //need add into global rules
    "@keyframes fadeInAnimation": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
  },

  login: {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  },
  column1: {
    marginRight: "15px",
    position: "relative",
    animation: "fadeInAnimation ease 5s",
  },

  wrapper: {
    border: "1px solid #ccc !important",
    width: 420,
    minHeight: 200,
    borderRadius: 2,
    padding: "0 24px 24px 24px ",
    backgroundColor: " white",
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
    borderRadius: "5px",
    backgroundColor: "rgb(250,250,250) !important",
  },
  form_option: {
    display: "flex",
    justifyContent: "center",
    margin: "5% auto",
    fontSize: "1rem",
    background: "white",
    width: "20%",
    position: "relative",
    color: "#ccc",
    fontWeight: "bold",
  },

  showPassword: {
    textAlign: "right !important",
    marginTop: "-11%",
    marginLeft: "85%",
    zIndex: "1",
    position: "relative",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "12px",
    width: "30px",
    color: "rgb(38,38,38) !important",
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
    textTransform: "none !important",
  },
  fb_btn: {
    backgroundColor: "white !important",
    color: "rgb(56,81,133) !important",
    textTransform: "none !important",
    marginTop: "8% !important",
  },
  boxes: {
    display: "flex",
    justifyContent: "center",
    margin: "5% auto",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    margin: "5% auto",
  },
  line: {
    borderTop: "1px solid #dbdbdb",
    marginTop: "-10%",
  },
});

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const importAllImg = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  // find all images in assets/images/slide folder that can be
  // required with a request ending with .png or .jpg
  const images = importAllImg(
    require.context("../../assets/images/slide", false, /\.(png|jpg)$/)
  );
  const [image, setImage] = useState(images["login1.png"]);

  const classes = useStyle();

  const changeImg = (image) => {
    setImage(images[image]);
  };

  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        changeImg("login1.png");
      }, 6000);
      setTimeout(() => {
        changeImg("login2.png");
      }, 12000);
      setTimeout(() => {
        changeImg("login3.png");
      }, 18000);
    }, 36000);
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.login}>
      {/* key={image} : trigger animation every time when component re-reder */}
      <div key={image} className={classes.column1}>
        <img width="400" height="590" src={image} alt="logo_slide" />
      </div>
      <div className={classes.column2}>
        <div className={classes.wrapper}>
          <img src={Logo} className={classes.logo} alt="Logo"></img>
          <FormControl className={classes.form_control}>
            <TextField
              className={classes.form_input}
              id="filled-search"
              label="Phone number, username, or email"
              type="text"
              variant="filled"
              name="username"
              InputProps={{
                disableUnderline: true,
              }}
              value={user.username}
              onChange={handleChange}
            />
            <TextField
              className={classes.form_input}
              sx={{ mt: 1 }}
              id="filled-search"
              label="Password"
              variant="filled"
              name="password"
              InputProps={{
                disableUnderline: true,
              }}
              type={showPassword ? "text" : "password"}
              value={user.password}
              onChange={handleChange}
            />
            <p
              className={classes.showPassword}
              onClick={handleClickShowPassword}
            >
              {user.password.length > 0 ? (showPassword ? "Hide" : "Show") : ""}
            </p>
            <Button className={classes.btn} sx={{ mt: 6 }} variant="contained">
              Log In
            </Button>
            <div>
              <span className={classes.form_option}>OR</span>
              <div className={classes.line}></div>
            </div>

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
      </div>
    </div>
  );
}

export default Login;
