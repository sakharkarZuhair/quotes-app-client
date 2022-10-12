import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  bigContainer: {
    backgroundColor: "#233554",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    boxShadow: "2px 2px 10px 10px #f7f7f7",
  },
  header: {
    color: "white",
  },
  logButton: {
    border: "1px solid white",
    fontWeight: "bold",
    padding: "10px 20px",
    color: "white",
    backgroundColor: "#233554",
    borderRadius: "3px",
  },
  appBar: {
    // borderRadius: 15,
    // margin: "30px 0",
    margin: "0px",
    backgroundColor: purple[700],
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 30px",
    boxShadow: "2px 2px 10px 5px #f0f0f0",
  },
  leftBar: {
    width: "90%",
    color: "#fff",
  },
  righBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "10%",
  },
  nameHeading: {
    color: "white",
  },
  button: {
    fontWeight: "bold",
    border: "none",
    padding: "10px 20px",
    backgroundColor: "white",
    borderRadius: "4px",
    color: purple[700],
    // boxShadow: "1px 1px 8px 2px #362e2e",
  },
}));
