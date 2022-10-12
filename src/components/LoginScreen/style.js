import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  bigContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  container: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  box: {
    backgroundColor: "white",
    height: "600px",
    width: "600px",
    position: "relative",
  },

  icon: {
    border: "1px solid white",
    position: "absolute",
    padding: "20px 20px",
    borderRadius: "100%",
    top: "-35px",
    left: "250px",
    backgroundColor: "#233554",
  },

  heading: {
    fontWeight: "bold",
    textAlign: "center",
    padding: "60px",
  },

  inputConatiner: {
    padding: "50px",
  },

  logInButton: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "20px 100px",
    marginLeft: "126px",
    backgroundColor: "#233554",
    border: "none",
    color: "white",
    borderRadius: "3px",
    boxShadow: "2px 2px 2px 2px #f7f7f7",
  },

  container: {
    width: "30%",
  },

  inputField: {
    width: "100%",
  },
  typo: {
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: purple[700],
    border: "none",
    fontWeight: "bold",
    color: "white",
    fontSize: "15px",
    borderRadius: "6px",
  },
}));
