import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import './App.css';
import { Grid } from "@material-ui/core";
import Page1 from "./Page1";

function App() {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date('2021-09-15T18:30:00Z') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Button variant="contained" color="secondary" size="large">
        {timeLeft[interval]} {interval}{" "}
      </Button>
    );
  });

  const print = () => {
    return (
      <div className="Countdown">
        <Button color="primary" size="large"><h2>Countdown</h2></Button>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>{timerComponents[0]}</Grid>
          <Grid item>{timerComponents[1]}</Grid>
          <Grid item>{timerComponents[2]}</Grid>
          <Grid item>{timerComponents[3]}</Grid>
        </Grid>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {timerComponents.length ? print() : 
        (<div className="Countdown">
        <Button color="secondary" size="large"><h2>happy birthday Babe!</h2></Button><br />
        <Button variant="contained" color="primary" href="Page1" size="large">Time's up! Click Here!</Button>
        </div>)}
      </header>
    </div>
  );
}

export default App;
