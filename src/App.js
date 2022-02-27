import Routing from "routes/";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  body: {
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "proxima-nova, sans-serif",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "1.875",
    margin: "0",
  }
});
function App() {
  const classes = useStyle();
  return (
    <div className={classes.body}>
      <Routing />
    </div>
  );
}

export default App;
