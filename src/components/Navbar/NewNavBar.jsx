import useStyles from "./styles";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NewNavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(userInfo);
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <div className={classes.bigContainer}>
      <Link style={{ textDecoration: "none" }} to="/home">
        <h2 className={classes.header}>Quotes</h2>
      </Link>
      <div>
        {userInfo ? (
          <button onClick={logoutHandler} className={classes.logButton}>
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/">
            <button className={classes.logButton}>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewNavBar;
