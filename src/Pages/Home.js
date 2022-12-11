import React from "react";
// import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Login from "../Components/Login";

const useStyles = makeStyles({
  container: {
    width: "90%",
    height: "100vh",
    // borderRadius: 25,
    // boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    backgroundColor: "#ffffff",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={4} md={6} xs={12}></Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Box className={classes.container}>
            <Login />
          </Box>
        </Grid>
      </Grid>
      <Grid item lg={4} md={6} xs={12}></Grid>
    </Grid>
  );
};

export default Home;
