import React, { useState } from "react";
import "./App.css";

// useState Hook
function App() {
  const [carState, setCarState] = useState("cruising");

  return (
    <>
      <h1>Your vehicle is now: {carState}.</h1>
      <button onClick={() => setCarState("cruising")} area-label="Cruising">
        Cruising
      </button>
      <button
        onClick={() => setCarState("accelerating")}
        area-label="Accelerating"
      >
        Accelerating
      </button>
      <button onClick={() => setCarState("braking")} area-label="Braking">
        Braking
      </button>
    </>
  );
}

export default App;
