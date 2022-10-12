import useStyles from "./style";
import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { AiOutlineLogin } from "react-icons/ai";
import { TextField } from "@material-ui/core";
import { login, register } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

const NewLoginDesign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(register(formData, navigate));
    } else {
      dispatch(login(formData, navigate));
    }
  };

  const classes = useStyles();
  return (
    <div
      className={classes.bigContainer}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Container maxWidth="sm" className={classes.container}>
        <Box boxShadow={2} className={classes.box}>
          <div className={classes.icon}>
            <AiOutlineLogin size={30} color={"white"} />
          </div>
          <Typography className={classes.heading} variant="h5">
            {isSignUp ? "Create Account" : "Login Account"}
          </Typography>
          <div className={classes.inputConatiner}>
            <Box className={classes.inputField}>
              <TextField
                style={{ width: "100%" }}
                id="username"
                label="Username"
                variant="outlined"
                name="username"
                type="text"
                onChange={handleChange}
              />
              <TextField
                style={{ width: "100%", marginTop: "30px" }}
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                onChange={handleChange}
              />
              {isSignUp ? (
                <button
                  onClick={submitHandler}
                  className={classes.logInButton}
                  variant="contained"
                >
                  Register
                </button>
              ) : (
                <button
                  onClick={submitHandler}
                  className={classes.logInButton}
                  variant="contained"
                >
                  Login
                </button>
              )}
              {isSignUp ? (
                <div
                  onClick={() => {
                    setIsSignUp(false);
                  }}
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    marginTop: "60px",
                  }}
                >
                  Already have an Account?{" "}
                  <span style={{ fontWeight: "bold", color: "#233554" }}>
                    Login here.
                  </span>
                </div>
              ) : (
                <div
                  onClick={() => setIsSignUp(true)}
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    marginTop: "60px",
                  }}
                >
                  Don't have an Account?{" "}
                  <span style={{ fontWeight: "bold", color: "#233554" }}>
                    Register here.
                  </span>
                </div>
              )}
            </Box>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default NewLoginDesign;
