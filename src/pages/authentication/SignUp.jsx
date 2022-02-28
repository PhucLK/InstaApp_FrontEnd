import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  boxes: {
    width: 420,
    padding: "24px 24px 24px 24px",
    display: "flex",
    justifyContent: "center",
    borderRadius: 2,
    margin: "8% auto !important",
    border: "1px solid #ccc !important",
    backgroundColor: " white",
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
      <Typography sx={{ pt: 20 }}>
        Don't have an account? {"  "}
        <Link className={classes.signUp} to="/signup">
          Sign up
        </Link>
      </Typography>
    </Box>
  );
}

export default SignUp;
