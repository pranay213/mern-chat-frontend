import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
const useStyles = makeStyles({
  root: {
    padding: "25px 0",
  },
  title: {
    color: "#101010",
    textAlign: "center",
    fontSize: "24px !important",
    fontWeight: "500 !important",
  },
  root2: {
    padding: "15px 0",
  },
  title2: {
    color: "#c1c1c1",
    textAlign: "center",
    fontSize: "16px !important",
    fontWeight: "500 !important",
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.title}>Sign up to</Typography>
        <Typography className={classes.title}>keep chat amazing</Typography>
      </div>
      <div className={classes.root2}>
        <Typography className={classes.title2}>
          Add your phone number. We'll send you a
        </Typography>
        <Typography className={classes.title2}>
          verification code so we know you're real.
        </Typography>
      </div>
    </>
  );
};

export default Login;
