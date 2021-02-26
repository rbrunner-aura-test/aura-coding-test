// Globals
import "./styles.scss";
import React, { useState, useEffect } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

function ActiveTimer(props) {
  return (
    <div>{formatTime(props.seconds)}</div>
  );
}

function formatTime(seconds) {
  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const secondString = displaySeconds >= 10 ? `${displaySeconds}` : `0${displaySeconds}`;
  return `${displayMinutes}:${secondString}`;
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);
  // TODO: implement counter...
  useEffect(() => {
    if (running) {
      setTimeout(() => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      }, 1000);
    }
  }, [running, counter]);

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>
      <div className="aura-page-content">
        <div className="aura-timer-clock">
          <ActiveTimer seconds={counter}/>
        </div>
        {counter <= 0 ? <Expired /> : null}
        <div className="aura-timer-buttons">
          <Button onClick={() => setRunning(true)}>Start</Button>
          <Button onClick={() => setCounter(60)}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
