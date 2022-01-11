import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import OneSignal from "react-onesignal";

const styles = makeStyles({
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& .MuiTypography-body1 ": {
      fontSize: "4rem",
      fontWeight: 900,
      color: "darkblue",
    },
  },
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    color: "white",
    backgroundColor: "darkblue",
    margin: "0 10px",
  },
});

export const WebPush = () => {
  const classes = styles();

  useEffect(() => {
    OneSignal.init({
      appId: "Your-App-Id",
    });
  }, []);

  const handleTag = (tag) => {
    console.log("Tagging");
    OneSignal.sendTag("tech", tag).then(() => {
      console.log("Tagged");
    });
  };

  return (
    <div className={classes.mainContainer}>
      <Typography>{"One Signal Testing"}</Typography>
      <div className={classes.buttonContainer}>
        <Button className={classes.button} onClick={() => handleTag("React")}>
          {"React"}
        </Button>
        <Button className={classes.button} onClick={() => handleTag("Angular")}>
          {"Angular"}
        </Button>
        <Button className={classes.button} onClick={() => handleTag("Vue")}>
          {"Vue"}
        </Button>
      </div>
    </div>
  );
};
