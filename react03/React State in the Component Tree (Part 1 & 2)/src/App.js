import React from "react";
import "./App.css";

// Conditional Rendering
function SecretComponent() {
  return <h1>The holidays are upon us.</h1>;
}

function RegularComponent() {
  return <h1>We are at the beginning of the semester.</h1>;
}

function App(props) {
  return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>;
}

export default App;
