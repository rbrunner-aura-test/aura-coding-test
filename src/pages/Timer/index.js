// Globals
import "./styles.scss";
import React, { useState } from "react";

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

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(0);

  // TODO: implement counter...

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">0:00</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button>Start</Button>
          <Button>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
